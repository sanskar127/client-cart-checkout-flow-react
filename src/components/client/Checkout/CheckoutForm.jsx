import React, { useState } from 'react'

const CheckoutForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  
  // Update formData on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Pass form data to parent component
  };

  return (
    <section className="space-y-4 mb-14">
      <h2 className="text-xl font-bold">Address</h2>
      <form onSubmit={handleFormSubmit}>

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
        <label className="block text-sm font-medium">Address 2 (optional)</label>
        <input
          type="text"
          name="address2"
          value={formData.address2 || ''}
          onChange={handleChange}
          placeholder='Apt 56B, Oakwood Towers'
          className="w-full h-10 border-2 border-solid border-primary p-2"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium">City, State</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Jaipur, Rajesthan"
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>

        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium">Pin code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="pincode"
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>

        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="USA"
            required
            className="w-full h-10 border-2 border-solid border-primary p-2"
          />
        </div>
      </div>
      <button type="submit" className="w-full bg-primary text-white py-2 mt-4 cursor-pointer">Next</button>
      </form>
    </section>
  )
}

export default CheckoutForm
