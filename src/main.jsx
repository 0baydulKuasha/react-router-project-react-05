import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{
    createBrowserRouter,
    Route,
    RouterProvider,
    createRoutesFromElements,
  }from "react-router-dom";

import Home from './assets/Compontent/Home/Home.jsx';
import About from './assets/Compontent/About/About.jsx';
import Navber from './assets/Compontent/Navber/Navber.jsx';
import Header from './assets/Compontent/Header/Header.jsx';
import Footer from './assets/Compontent/Footer/Footer.jsx';
import Postes from './assets/Compontent/postes/Postes.jsx';
  const router = createBrowserRouter([{
        path: '/',
        element: <Navber></Navber>,
        children:[
          {
            path:'/header',
            element:<Header></Header>
          },
          {
            path: '/home',
            element:<Home></Home>
          },         
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/footer',
            loader:() => fetch("https://jsonplaceholder.typicode.com/users"),
            element:<Footer></Footer>
          },
          {
            path:'/postes',
            loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
            element:<Postes></Postes>
          }
        ]

      },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

