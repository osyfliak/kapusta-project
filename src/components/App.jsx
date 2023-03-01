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

import { refreshUser } from 'redux/auth/operation';
import { selectIsFetcingCurrentUser} from 'redux/selector';

import { PrivateRoute } from './Auth/PrivateRoute/PrivateRoute';
import { PublicRoute } from './Auth/PublicRoute/PublicRoute';
import { SharedLayouts } from './Auth/SharedLayouts/SharedLayouts';

export const App = () => {
  const dispatch = useDispatch();

  const isFetchingUser = useSelector(selectIsFetcingCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());

   
  }, [dispatch]);

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
              {/* <Route path="*" element={<Navigate to="/login" />} /> */}
            </Route>
 
            <Route path="/home" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<ThereIsNoSuchPage />} />
          </Route>
        </Routes>
      </>
    )
  );
};
