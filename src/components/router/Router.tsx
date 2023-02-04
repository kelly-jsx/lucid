import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import HomePage from '~/components/screens/HomePage';

const Loading = () => (
  <div className="hero min-h-screen bg-gray-800">
    <div className="text-center hero-content text-3xl font-bold">
      <div className={'flex items-center gap-5'}>
        <div
          style={{ borderTopColor: 'transparent' }}
          className="w-16 h-16 border-4 border-t-fuchsia-600 border-primary rounded-full animate-spin"
        />
        <p className="text-4xl">Loading...</p>
      </div>
    </div>
  </div>
);

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          // element: <IndexScreen />,
          element: <HomePage />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
        {
          path: 'feed',
          element: <HomePage />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
