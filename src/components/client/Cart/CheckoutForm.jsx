import React from 'react'

const CheckoutForm = () => {
  return (
    <section className="space-y-4 mb-14 w-xl">
      <h2 className="text-xl font-bold">Address</h2>

      <div className="flex gap-4">
        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium">Name*</label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>

        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            placeholder="example@mail.com"
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Address 1*</label>
        <input
          type="text"
          placeholder='1234 Elm Street'
          required
          className="w-full h-10 border-2 border-solid border-primary p-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Address 2</label>
        <input
          type="text"
          placeholder='Apt 56B, Oakwood Towers'
          className="w-full h-10 border-2 border-solid border-primary p-2"
        />
      </div>
    </section>
  )
}

export default CheckoutForm
