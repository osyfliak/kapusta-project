import { Auth } from 'pages/Auth/Auth';
import LoginPage from 'pages/Auth/LoginPage/LoginPage';
import RegisterPage from 'pages/Auth/RegisterPage/RegisterPage';
import ThereIsNoSuchPage from 'pages/Auth/ThereIsNoSuchPage/ThereIsNoSuchPage';
import { Home } from 'pages/Home/Home';
import { Report } from 'pages/Report/Report';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addAccessToken } from 'redux/auth/authSlice';
import { refreshUser } from 'redux/auth/operation';
import { selectIsFetcingCurrentUser, selectToken } from 'redux/selector';
import { setAuthHeader } from 'services/kapusta-api';
import { PrivateRoute } from './Auth/PrivateRoute/PrivateRoute';
import { PublicRoute } from './Auth/PublicRoute/PublicRoute';
import { SharedLayouts } from './Auth/SharedLayouts/SharedLayouts';



export const App = () => {

   const dispatch = useDispatch();
 
  const token = useSelector(selectToken);
  const isFetchingUser = useSelector(selectIsFetcingCurrentUser);


  const location = window.location;
  const urlSearchParams = new URLSearchParams(location.search);
  const accessToken = urlSearchParams.get('accessToken');
 

  useEffect(() => {
    if (accessToken) {
      setAuthHeader(accessToken);
      dispatch(addAccessToken(accessToken));
      dispatch(refreshUser());
      if (location.pathname === '/') {
        location.pathname = '/kapusta/home';
        dispatch(refreshUser());
      }
    }
  }, [accessToken, dispatch, location]);
  // Refresh user
  useEffect(() => {
    if (!token || token === 'null' || token === null) {
      return;
    }
    setAuthHeader(token);
    dispatch(addAccessToken(token));
    dispatch(refreshUser());
  }, [dispatch, token]);

  return (
    !isFetchingUser && (
      <>
         <ToastContainer />
      <Routes>
            <Route path="/" element={<SharedLayouts />}>
              {/* Private routes */}
              <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Navigate to="/home" />} />
              </Route>
              {/* Public routes */}
              <Route path="/" element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Route>
               <Route path="/home" element={<Navigate to="/home" />} />
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<Report />} />
              <Route path="/auch" element={<Auth />} />
              <Route path="*" element={<ThereIsNoSuchPage />} />
            </Route>
        </Routes>
        </>
    )
   
  );
};
