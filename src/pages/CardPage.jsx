import React, { useEffect, useState, useContext } from 'react'
import CardItem from '../components/client/Cart/CardItem'
import { CartContext } from "../context/CartContext"
import CheckoutForm from '../components/client/Cart/CheckoutForm'

const CardPage = () => {
  const [items, setItems] = useState([])
  const { finalAmount, setCartSummary } = useContext(CartContext)

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("/data.json")
      const data = await response.json()
      setItems(data)
    }

    getdata()
  }, [])

  return (
    <div className='py-12'>
      {/* Heading */}
      <header className='mb-10'>
        <h2 className='text-primary text-4xl font-bold'>Your Cart</h2>
        <p className='pl-1'>1 item ships at checkout</p>
      </header>

      <main className='flex items-center gap-6'>
        <section className='w-full'>
          {/* Checkout Form */}
          <CheckoutForm />

          {/* Divider */}
          {/* <div className='h-[1px] my-8 border-1 border-gray-400'></div> */}

          {/* Card Items Table */}
          <section>
            <table className="w-full text-primary border-separate border-spacing-0">
              <thead className="bg-gray-100 text-left">
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 text-left">Product</th> {/* Empty cell for thumbnail */}
                  <th className="py-3 px-4"></th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4"></th> {/* Empty cell for actions */}
                  <th className="py-3 px-4">Total</th>
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
          </section>
        </section>


        {/* Summary Section */}
        <section className='bg-background text-primary w-2/4 p-14'>

          {/* <h3 className='text-2xl mb-4 font-semibold'>Summary</h3> */}

          {/* Coupon Form */}
          <section className='mb-4'>
            <label htmlFor="">Have promo code?</label>
            <div className="flex h-10 mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter coupon code"
                className="flex-grow h-full border-2 border-solid border-primary p-2"
              />
              <input
                type="submit"
                value="Apply Coupon"
                className="h-full bg-primary text-foreground border-2 border-solid border-primary py-1 px-4 font-medium"
              />
            </div>
          </section>

          <div className='font-light flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h4>Subtotal (1 items)</h4>
              <h4>$10.00</h4>
            </div>

            {/* <div className='flex justify-between'>
              <h4>Sales Tax</h4>
              <h4>$2.08</h4>
            </div>

            <div className='flex justify-between'>
              <h4>Shipping Charge</h4>
              <h4>$4.00</h4>
            </div> */}

            <div className='flex justify-between'>
              <h4>Coupon Discount</h4>
              <h4>-$0.89</h4>
            </div>
          </div>

          {/* Divider */}
          <div className='h-[1px] my-4 border-1 border-gray-400'></div>

          <div className='text-xl font-semibold flex justify-between mb-4'>
            <h3>Total</h3>
            <h3>${finalAmount}</h3>
          </div>

          <button className='bg-primary text-foreground text-xl font-medium text-center w-full py-3 cursor-pointer'>Checkout</button>
        </section>
      </main>
    </div>
  )
}

export default CardPage
