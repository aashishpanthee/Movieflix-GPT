import React from 'react';
import Login from './Login.tsx';
import Browse from './Browse.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

type Props = {};

const Body = (props: Props) => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
