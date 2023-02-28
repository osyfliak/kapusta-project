import { useEffect, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
import { addAccessToken } from 'redux/auth/authSlice';
import { setAuthHeader } from 'services/apiAuth';
import { refreshUser } from 'redux/auth/operation';
import { selectIsFetcingCurrentUser, selectToken } from 'redux/selector';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';


const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegiserPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ThereIsNoSuchPage = lazy(() =>
  import('../pages/ThereIsNoSuchPage/ThereIsNoSuchPage')
);

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
        <BrowserRouter basename="kapusta-project">
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
                <Route path="/register" element={<RegiserPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Route>
              <Route path="*" element={<ThereIsNoSuchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  );
};
