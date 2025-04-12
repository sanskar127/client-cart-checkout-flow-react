import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from "./context/CartProvider"
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <Toaster position="top-center" />
      <App />
    </CartProvider>
  </StrictMode>,
)
