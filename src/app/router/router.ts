import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/auth/Login';
import Browse from '../components/browse/Browse';

const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(Login as React.ComponentType),
  },
  {
    path: '/browse',
    element: React.createElement(Browse as React.ComponentType),
  },
]);

export default router;
