import React from 'react'
import CheckoutForm from "../components/client/Checkout/CheckoutForm"
import SummaryCard from '../components/client/Checkout/SummaryCard'
import DetailsCard from '../components/client/Checkout/DetailsCard'

const CheckoutPage = () => {
  return (
    <div className='py-12 font-mono sm:py-6'>
      {/* Heading */}
      <header className='mb-10'>
        <h2 className='text-primary text-4xl font-bold'>Checkout</h2>
      </header>

      {/* Main Section */}
      <main className='flex flex-col lg:flex-row items-start justify-between gap-6'>
        <section>
          <CheckoutForm />
          <DetailsCard/>
        </section>

        <SummaryCard />

      </main>
    </div>
  )
}

export default CheckoutPage
