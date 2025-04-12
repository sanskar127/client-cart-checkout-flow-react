import React, { useContext } from 'react'
import CardItem from '../components/client/Cart/CardItem'
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

const CardPage = () => {

  const { finalAmount, items } = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div className='py-12 font-mono sm:py-6'>
      {/* Heading */}
      <header className='mb-10'>
        <h2 className='text-primary text-4xl font-bold'>Your Cart</h2>
      </header>

      {/* Main Section */}
      <main className='flex flex-col lg:flex-row items-start gap-6'>
        <section className='w-full lg:w-2/3'>
          {/* Cart Items Table */}
          <section>
            <div className="overflow-x-auto"> {/* Enables horizontal scrolling on small screens */}
              <table className="min-w-full text-primary border-separate border-spacing-0">
                <thead className="bg-background-alt text-left">
                  <tr className="border-b border-gray-300">
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4"></th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map(item => (
                    <CardItem
                      key={item.id}
                      productId={item.id}
                      thumbnail={item.image}
                      title={item.name}
                      price={item.price}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        {/* Summary Card */}
        <section className='bg-background text-primary w-full lg:w-1/3 p-6 lg:p-14'>
          <div className='font-semibold text-xl flex justify-between mb-4'>
            <h3>Estimated Total</h3>
            <h3 className='text-xl'>${finalAmount.toFixed(2)}</h3>

          </div>

          <p className='text-sm mb-4'>Sales Tax will be calculated during checkout</p>

          <button
            className='bg-primary text-foreground text-xl font-medium text-center w-full py-3 cursor-pointer'
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </section>
      </main>
    </div>
  )
}

export default CardPage
