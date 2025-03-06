import React from 'react'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Home from './pages';
import About from "./pages/home/about"
import Feature from './pages/home/feature';
import Contact from './pages/home/contact';
import Innovator from './pages/home/Innovator';




function App() {
  


  const router = createBrowserRouter([
    
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
             index: true,
              element: <Home/>
             },

             {
              path:"/home",
              element:<Home/>
             },
         {
          path:"/about",
          element:<About/>
         },
         {
          path:"/innovator",
          element:<Innovator/>
         },
         {
          path:"/feature",
          element:<Feature/>
         },
         {
          path:"/contact",
          element:<Contact/>
         },
        ],
      },
    
  ])

  return (
    <>
     
      <RouterProvider router={router} />
   
    </>
  );
}

export default App;