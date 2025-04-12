import React from 'react';

const DetailsCard = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 mb-14">
      <h2 className="text-2xl font-semibold mb-4">Details</h2>

      <div className="bg-gray-100 p-6 space-y-6 w-full">
        {/* Delivery Address */}
        <section>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Delivery Address</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Yajmaan Shashtri <br />
            example@mail.com <br />
            Address Field 1 <br />
            Address Field 2 <br />
            Jaipur, Rajasthan <br />
            22301 <br />
          </p>
        </section>

        <div className="border-t border-gray-200" />

        {/* Order Summary */}
        <section className="space-y-3">
          {[ 
            { name: 'Itemxyz', qty: 2, price: 12.0 },
            { name: 'Itemxyz', qty: 1, price: 10.0 },
            { name: 'Itemxyz', qty: 1, price: 11.0 }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between text-sm text-gray-700"
            >
              <span>{item.name}</span>
              <span>x {item.qty}</span>
              <span>${(item.qty * item.price).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-200">
            <span>Subtotal</span>
            <span>$33.00</span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailsCard;
