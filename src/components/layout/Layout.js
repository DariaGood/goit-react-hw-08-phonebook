import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};