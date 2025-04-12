import React from 'react';
import CouponForm from '../CouponForm';

const SummaryCard = () => {
  return (
    <section className="bg-background text-primary w-full max-w-lg mx-auto p-6 sm:p-8 lg:p-14">
      <h3 className="text-2xl mb-4 font-semibold">Checkout</h3>

      {/* Coupon Form */}
      <CouponForm />

      <div className="font-light flex flex-col gap-2 mt-4">
        <div className="flex justify-between">
          <h4>Subtotal (1 items)</h4>
          <h4>$10.00</h4>
        </div>

        <div className="flex justify-between">
          <h4>Coupon Discount</h4>
          <h4>-$0.89</h4>
        </div>

        <div className="flex justify-between">
          <h4>Shipping Charge</h4>
          <h4>$4.00</h4>
        </div>

        <div className="flex justify-between">
          <h4>Sales Tax</h4>
          <h4>$2.08</h4>
        </div>
      </div>

      <div className="h-px my-4 bg-gray-300" />

      <div className="font-semibold text-xl flex justify-between mb-4">
        <h3>Final Amount</h3>
        <h3 className="text-xl">${0}</h3>
      </div>

      <button className="bg-primary text-foreground text-xl font-medium text-center w-full py-3 cursor-pointer">
        Place Order
      </button>
    </section>
  );
};

export default SummaryCard;
