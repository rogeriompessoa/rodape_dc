import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home.jsx'
import Contato from './Components/Pages/Contato.jsx'
import Novo from './Components/Pages/Novo.jsx'

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
    path:"Novo",
    element:<Novo />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
