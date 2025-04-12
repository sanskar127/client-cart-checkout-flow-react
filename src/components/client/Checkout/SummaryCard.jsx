import React from 'react'
import CouponForm from '../CouponForm'

const SummaryCard = () => {
  return (
    <section className='bg-background text-primary w-10 lg:w-2/4 p-6 lg:p-14'>
      <h3 className='text-2xl mb-4 font-semibold'>Summary</h3>

      {/* Coupon Form */}
      <CouponForm />

      <div className='font-light flex flex-col gap-2'>
        <div className='flex justify-between'>
          <h4>Subtotal (1 items)</h4>
          <h4>$10.00</h4>
        </div>

        <div className='flex justify-between'>
          <h4>Coupon Discount</h4>
          <h4>-$0.89</h4>
        </div>
      </div>

        <div className='flex justify-between'>
          <h4>Shipping Charge</h4>
          <h4>$4.00</h4>
        </div>

      <div className='flex justify-between'>
        <h4>Sales Tax</h4>
        <h4>$2.08</h4>
      </div>

      {/* Divider */}
      <div className='h-[1px] my-4 border-1 border-gray-400'></div>

      <div className='font-semibold text-xl flex justify-between mb-4'>
        <h3>Final Amount</h3>
        <h3 className='text-xl'>${0}</h3>
      </div>

      <button className='bg-primary text-foreground text-xl font-medium text-center w-full py-3 cursor-pointer'>Place Order</button>
    </section>
  )
}

export default SummaryCard


// import React, { useEffect, useState, useContext } from 'react'
// import CardItem from '../components/client/Cart/CardItem'
// import { CartContext } from "../context/CartContext"
// import CheckoutForm from '../components/client/Cart/CheckoutForm'
// import { useNavigate } from 'react-router-dom'

// const CardPage = () => {
//   const [items, setItems] = useState([])
//   const { finalAmount, setCartSummary } = useContext(CartContext)

//   const navigate = useNavigate()

//   useEffect(() => {
//     const getdata = async () => {
//       const response = await fetch("/data.json")
//       const data = await response.json()
//       setItems(data)
//     }

//     getdata()
//   }, [])

//   return (
//     <div className='py-12 font-mono sm:py-6'>
//       {/* Heading */}
//       <header className='mb-10'>
//         <h2 className='text-primary text-4xl font-bold'>Your Cart</h2>
//         <p>1 item ships at checkout</p>
//       </header>

//       <main className='flex items-start gap-6'>
//         <section className='w-full'>
//           {/* Checkout Form */}
//           {/* <CheckoutForm /> */}

//           {/* Divider */}
//           {/* <div className='h-[1px] my-8 border-1 border-gray-400'></div> */}

//           {/* Card Items Table */}
//           <section>
//             <table className="w-full text-primary border-separate border-spacing-0">
//               <thead className="bg-gray-100 text-left">
//                 <tr className="border-b border-gray-300">
//                   <th className="py-3 px-4 text-left">Product</th> {/* Empty cell for thumbnail */}
//                   <th className="py-3 px-4"></th>
//                   <th className="py-3 px-4">Price</th>
//                   <th className="py-3 px-4">Quantity</th>
//                   <th className="py-3 px-4">Total</th>
//                   <th className="py-3 px-4"></th> {/* Empty cell for actions */}
//                 </tr>
//               </thead>

//               <tbody>
//                 {items.map(item => (
//                   <CardItem
//                     key={item.id}
//                     thumbnail={item.image}
//                     title={item.name}
//                     price={item.price}
//                   />
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         </section>


//         {/* Summary Card */}
//         <section className='bg-background text-primary w-2/4 p-14'>

//           {/* <h3 className='text-2xl mb-4 font-semibold'>Summary</h3> */}

//           {/* Coupon Form */}
//           {/* <section className='mb-4'>
//               <label htmlFor="">Have promo code?</label>
//               <div className="flex h-10 mt-2">
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   placeholder="Enter coupon code"
//                   className="flex-grow h-full border-2 border-solid border-primary p-2"
//                 />
//                 <input
//                   type="submit"
//                   value="Apply Coupon"
//                   className="h-full bg-primary text-foreground border-2 border-solid border-primary py-1 px-4 font-medium"
//                 />
//               </div>
//             </section> */}

//           <div className='font-light flex flex-col gap-2'>
//             {/* <div className='flex justify-between'>
//                 <h4>Subtotal (1 items)</h4>
//                 <h4>$10.00</h4>
//               </div> */}

//             {/* <div className='flex justify-between'>
//                 <h4>Sales Tax</h4>
//                 <h4>$2.08</h4>
//               </div>

//               <div className='flex justify-between'>
//                 <h4>Shipping Charge</h4>
//                 <h4>$4.00</h4>
//               </div> */}

//             {/* <div className='flex justify-between'>
//                 <h4>Coupon Discount</h4>
//                 <h4>-$0.89</h4>
//               </div> */}
//           </div>

//           {/* Divider */}
//           {/* <div className='h-[1px] my-4 border-1 border-gray-400'></div> */}

//           <div className='font-semibold flex justify-between mb-4'>
//             <span className='flex'><h3>Estimated Total</h3> <p className='font-light'>(1 item)</p></span>
//             <h3 className='text-xl'>${finalAmount}</h3>
//           </div>

//           <button className='bg-primary text-foreground text-xl font-medium text-center w-full py-3 cursor-pointer' onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default CardPage
