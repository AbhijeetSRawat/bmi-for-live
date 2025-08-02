import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewDetailspage from './components/ViewDetailspage' 
import CreateProduct from './adminpanel/CreateProduct'
import ReadProduct from './adminpanel/ReadProduct'
import UpdateProducts from './adminpanel/UpdateProducts'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/viewdetailspage/:id',
          element: <ViewDetailspage />
        }, 
        {
          path: '/createproduct',
          element: <CreateProduct />
        },
        {
          path: '/readproduct',
          element: <ReadProduct />
        },
        {
          path: '/edit/:id',
          element: <UpdateProducts />
        }
      ]
    },

  ])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}
