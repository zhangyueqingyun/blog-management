import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routerConfig from './config/router';

import './App.css';

const router = createBrowserRouter(routerConfig, {basename: '/management'});

export default function App() {
  return (<React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  );
}
