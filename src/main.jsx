import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import Admin from './Pages/Admin/Admin.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/admin',
          element: <Admin />
        }
      ]
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
    },
  }
);


createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer />
    <RouterProvider future={{
      v7_startTransition: true,
    }} router={router} />
  </>,
)
