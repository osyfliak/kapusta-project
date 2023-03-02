import { Auth } from 'pages/Auth/Auth';
import LoginPage from 'pages/Auth/LoginPage/LoginPage';
import RegisterPage from 'pages/Auth/RegisterPage/RegisterPage';
import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import Income from 'pages/Income/Income';

// import ExpensesPage from 'pages/Expences/Expences';
import { Home } from 'pages/Home/Home';
import { Report } from 'pages/Report/Report';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { refreshUser } from 'redux/auth/operation';

import { selectIsFetcingCurrentUser } from 'redux/selector';

import { PrivateRoute } from './Auth/PrivateRoute/PrivateRoute';
import { PublicRoute } from './Auth/PublicRoute/PublicRoute';
import { SharedLayouts } from './Auth/SharedLayouts/SharedLayouts';
import Container from './Container/Container';

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
            <Container>
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}>
                <Route path="/home/expenses" element={<ExpensesPage />} />
                <Route path="/home/income" element={<Income />} />
              </Route>
              <Route path="/report" element={<Report />} />
            </Route>
            </Container>
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      </>
    )
  );
};
