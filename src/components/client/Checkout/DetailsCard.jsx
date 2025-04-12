import React from 'react';

const DetailsCard = ({ customerData }) => {
  const items = [
    { title: "Product 1", qty: 2, price: 20.0 },
    { title: "Product 2", qty: 1, price: 50.0 },
  ];

  const subtotal = items.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2);

  return (
    <section className='space-y-4 mb-14 w-full bg-background p-6 rounded shadow'>
      <div className='flex flex-col md:flex-row gap-4'>
      <h2 className="text-xl font-bold mb-4">Order Details</h2>

      {/* Customer Information */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Customer Information</h3>
        <p><strong>Name:</strong> {customerData.name}</p>
        <p><strong>Email:</strong> {customerData.email}</p>
        <p><strong>Phone:</strong> {customerData.phone}</p>
      </div>

      {/* Shipping Information */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Shipping Information</h3>
        <p><strong>Address:</strong> {customerData.address}</p>
        <p><strong>City:</strong> {customerData.city}</p>
        <p><strong>Postal Code:</strong> {customerData.postalCode}</p>
        <p><strong>Country:</strong> {customerData.country}</p>
      </div>

      {/* Order Items */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Order Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.title} x {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Total Summary */}
      <div className="font-semibold text-xl flex justify-between mb-4">
        <h3>Total</h3>
        <h3 className="text-xl">${subtotal}</h3>
      </div>
      </div>
    </section>
  );
};

export default DetailsCard;
