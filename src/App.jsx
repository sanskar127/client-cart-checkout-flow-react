import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CheckoutPage from "./pages/CheckoutPage"
import CardPage from './pages/CardPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='/cart' />
    },
    {
      path: "cart",
      element: <CardPage />
    },
    {
      path: "checkout",
      element: <CheckoutPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
