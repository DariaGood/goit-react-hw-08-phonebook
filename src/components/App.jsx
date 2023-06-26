import { Layout } from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { PrivateRoute } from './privateRoute/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/slice';
import { RestrictedRoute } from './restrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { Loader } from './loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContacsPage = lazy(() => import('../pages/Constacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContacsPage} redirectTo="/" />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};