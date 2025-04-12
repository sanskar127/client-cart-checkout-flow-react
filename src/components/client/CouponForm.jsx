import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { CartContext } from '../../context/CartContext';

const CouponForm = ({subtotal}) => {
  const [couponCode, setCouponCode] = useState('');
  const { setCouponDiscount } = useContext(CartContext);

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

  return (
    <form onSubmit={handleApply} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full"
        required
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded cursor-pointer">
        Apply
      </button>
    </form>
  );
};

export default CouponForm;
