import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import CheckoutForm from "../components/client/Checkout/CheckoutForm"
import SummaryCard from '../components/client/Checkout/SummaryCard'
import DetailsCard from '../components/client/Checkout/DetailsCard'
import { CartContext } from '../context/CartContext'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { formStep } = useContext(CartContext)

  return (
    <div className='py-12 font-mono sm:py-6'>
      {/* Back Button */}
      <button
        className="flex items-center gap-2 text-primary mb-4 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft className="text-xl" />
        Back
      </button>

      {/* Heading */}
      <header className='mb-10'>
        <h2 className='text-primary text-4xl font-bold'>Checkout</h2>
      </header>

      {/* Main Section */}
      <main className='flex flex-col lg:flex-row items-start gap-6'>
        <section className='w-full lg:w-2/3'>
          {formStep === 1 ? (
            <CheckoutForm />
          ) : (
            <DetailsCard />
          )}
        </section>

        <SummaryCard />
      </main>
    </div>
  )
}

export default CheckoutPage
