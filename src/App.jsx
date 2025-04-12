import React, { useContext, useEffect } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CheckoutPage from "./pages/CheckoutPage"
import CardPage from './pages/CardPage'
import { CartContext } from './context/CartContext'

const App = () => {
  const { items, setItems } = useContext(CartContext)

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


  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("/data.json")
      const data = await response.json()
      setItems(data)
    }

    getdata()
  }, [])


  return (
    <RouterProvider router={router} />
  )
}

export default App
