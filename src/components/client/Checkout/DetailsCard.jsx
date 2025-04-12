import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const DetailsCard = () => {
  const { cartSummary, customerData } = useContext(CartContext)
  const cartItems = Object.values(cartSummary);  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>

      <div className="bg-gray-100 p-6 space-y-6 w-full">
        {/* Shipping Information */}
        <section>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Shipping Information</h4>
          {/* <p className="text-sm text-gray-600 leading-relaxed"> */}
          <p className="text-sm text-gray-600 leading-relaxed">{customerData.name}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{customerData.email}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{customerData.address},</p>
          <p className="text-sm text-gray-600 leading-relaxed">{customerData.address2},</p>
          <p className="text-sm text-gray-600 leading-relaxed">City {customerData.city},</p>
          <p className="text-sm text-gray-600 leading-relaxed">State{customerData.state},</p>
          <p className="text-sm text-gray-600 leading-relaxed">Postal Code{customerData.postalCode}</p>
        </section>

        <div className="border-t border-gray-200" />

        {/* Order Summary */}
        <section className="space-y-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm text-gray-700"
            >
              <span className='flex' ><p className='mr-10'>{item.title}</p> <p>x {item.qty}</p></span>
              <span>${(item.qty * item.price).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-200">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailsCard;
