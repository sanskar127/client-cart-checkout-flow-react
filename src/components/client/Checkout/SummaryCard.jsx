import React, { act, useContext } from 'react';
import CouponForm from './CouponForm';
import { CartContext } from '../../../context/CartContext';

const SummaryCard = () => {
  const { cartSummary, couponDiscount, active } = useContext(CartContext);

  console.log(active)

  const handleClick = () => {
    alert("Hello World")
  }

  // Calculate Subtotal & Total Items
  const subtotal = Object.values(cartSummary).reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 0),
    0
  )

  const totalItems = Object.values(cartSummary).reduce(
    (acc, item) => acc + (item.qty || 0),
    0
  )

  const shipping = subtotal === 0 ? 0 : 4.0;
  const tax = subtotal === 0 ? 0 : 2.08

  const total = subtotal === 0
    ? 0
    : (subtotal - couponDiscount + shipping + tax).toFixed(2);

  return (
    <section className='bg-background text-primary w-full lg:w-1/3 p-6 lg:p-14'>
      <h3 className="text-2xl mb-4 font-semibold">Summary</h3>

      {/* Coupon Form */}
      <CouponForm subtotal={subtotal} />

      <div className="font-light flex flex-col gap-2 mt-4">
        <div className="flex justify-between">
          <h4>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h4>
          <h4>${subtotal.toFixed(2)}</h4>
        </div>

        {couponDiscount ? (
          <div className="flex justify-between">
            <h4>Coupon Discount</h4>
            <h4>-${couponDiscount.toFixed(2)}</h4>
          </div>
        ) : ""
        }

        <div className="flex justify-between">
          <h4>Shipping Charge</h4>
          <h4>${shipping.toFixed(2)}</h4>
        </div>

        <div className="flex justify-between">
          <h4>Sales Tax</h4>
          <h4>${tax.toFixed(2)}</h4>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px my-4 bg-gray-300" />

      <div className="font-semibold text-xl flex justify-between mb-4">
        <h3>Estimated total</h3>
        <h3 className="text-xl">${total}</h3>
      </div>

      <button
        onClick={handleClick}
        className={`text-xl font-medium text-center w-full py-3 ${active ? "bg-primary text-foreground cursor-pointer" : "bg-gray-300 text-foreground"}`}
        disabled={!active} // Disable button if not active
      >
        Place Order
      </button>
    </section>
  );
};

export default SummaryCard;
