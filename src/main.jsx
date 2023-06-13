import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './router/home.jsx'
import Contato from './router/contato.jsx'
import Link from './router/Link.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/Contato",
    element:<Contato />,
  },
  {
    path:"Link",
    element:<Link />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
