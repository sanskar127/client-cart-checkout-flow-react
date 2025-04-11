import React, { useEffect, useState, useContext } from 'react'
import CardItem from '../components/client/Cart/CardItem'
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

const CardPage = () => {
  const [items, setItems] = useState([])
  const { finalAmount } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("/data.json")
      const data = await response.json()
      setItems(data)
    }

    getdata()
  }, [])

  return (
    <div className='py-12 font-mono sm:py-6'>
      {/* Heading */}
      <header className='mb-10'>
        <h2 className='text-primary text-4xl font-bold'>Your Cart</h2>
        <p>1 item ships at checkout</p>
      </header>

      <main className='flex flex-col lg:flex-row items-start gap-6'>
        <section className='w-full lg:w-2/3'>
          {/* Card Items Table */}
          <section>
            <div className="overflow-x-auto"> {/* Enables horizontal scrolling on small screens */}
              <table className="min-w-full text-primary border-separate border-spacing-0">
                <thead className="bg-gray-100 text-left">
                  <tr className="border-b border-gray-300">
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4"></th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {items.map(item => (
                    <CardItem
                      key={item.id}
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
          <div className='font-semibold flex justify-between mb-4'>
            <span className='flex items-center text-sm'>
              <h3>Estimated Total</h3>
              <p className='font-light'>(1 item)</p>
            </span>
            <h3 className='text-xl'>${finalAmount}</h3>
          </div>

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
