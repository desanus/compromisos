import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import ErrorPage from "./components/ErrorPage";
import Compromisos from './components/Compromisos.jsx';
import Compromiso from './components/Compromiso.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Compromisos />
      },
      {
        path: "compromiso/:compromisoId/anio/:anio",
        element: <Compromiso />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
