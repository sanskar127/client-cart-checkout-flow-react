import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalCode: ''
  })

  const { setCustomerData, setActive, setFormStep } = useContext(CartContext)

  // Update formData on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setCustomerData(formData) // Pass form data to parent component
    setFormStep(2)
    setActive(prev => !prev)
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Address</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 lg:w-2/3'>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full h-10 border-2 border-solid border-primary p-2"
            />
          </div>

          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
              className="w-full h-10 border-2 border-solid border-primary p-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Address 1</label>
          <input
            type="text"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            placeholder='1234 Elm Street'
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2 || ''}
            onChange={handleChange}
            placeholder='Apt 56B, Oakwood Towers'
            className="w-full h-10 border-2 border-solid border-primary p-2"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Jaipur"
              required
              className="w-full h-10 border-2 border-solid border-primary p-2"
            />
          </div>

          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Rajesthan"
              required
              className="w-full h-10 border-2 border-solid border-primary p-2"
            />
          </div>

          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium">Postal code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="postal code"
              required
              className="w-full h-10 border-2 border-solid border-primary p-2"
            />
          </div>
        </div>
        <button type="submit" className="lg:w-fit bg-primary text-white py-2 px-6 mt-4 cursor-pointer">Confirm Details</button>
      </form>
    </section>
  )
}

export default CheckoutForm
