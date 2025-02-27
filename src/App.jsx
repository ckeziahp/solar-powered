import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Home from './pages';





function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // 3 seconds delay, adjust as needed

  //   return () => clearTimeout(timer);
  // }, []);

  const router = createBrowserRouter([
    
      {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <Home/> }],
      },
    
    
    
  ])

  return (
    <>
     
      <RouterProvider router={router} />
   
    </>
  );
}

export default App