import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { CartContext } from '../../../context/CartContext';

const CouponForm = ({ subtotal }) => {
  const [couponCode, setCouponCode] = useState('');
  const { setCouponDiscount, couponDiscount } = useContext(CartContext);

  // Dummy coupon list
  const coupons = [
    { code: 'SAVE10', discount: 10 },
    { code: 'FREESHIP', discount: 4 },
    { code: 'NEWUSER', discount: 15 },
  ];

  const handleApply = (e) => {
    e.preventDefault();

    if (subtotal === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    const found = coupons.find(c => c.code.toLowerCase() === couponCode.trim().toLowerCase());

    if (found) {
      toast.success(`Coupon applied! You saved $${found.discount}`);
      setCouponDiscount(found.discount);
    } else {
      toast.error('Invalid coupon code');
    }

    setCouponCode('');
  };

  const handleRemoveCoupon = () => {
    setCouponDiscount(0);  // Reset the discount
    toast.success('Coupon removed');
  };

  return (
    <div className="coupon-container">


      {/* Show the remove coupon button if a coupon is applied */}
      {couponDiscount > 0 ? (
        <div className="flex items-center h-10">
          <input
            type="text"
            placeholder="Coupon applied!"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border-2 border-green-800 px-4 py-2 w-full h-full"
            disabled
          />
          <button onClick={handleRemoveCoupon} className="bg-green-800 h-full text-foreground px-4 py-2 cursor-pointer">
            Remove
          </button>
        </div>
      )
        : <form onSubmit={handleApply} className="flex items-center h-10">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border-2 border-primary px-4 py-2 w-full h-full"
            required
          />
          <button type="submit" className="bg-primary h-full text-foreground px-4 py-2 cursor-pointer">
            Apply
          </button>
        </form>}
    </div>
  );
};

export default CouponForm;
