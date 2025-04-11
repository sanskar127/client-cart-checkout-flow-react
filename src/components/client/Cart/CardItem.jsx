import React, { useContext, useState } from 'react'
import { CartContext } from "../../../context/CartContext"

const CardItem = ({ thumbnail, title, price }) => {
  const [qty, setQty] = useState(1)
  const [total, setTotal] = useState(price)
  const { finalAmount, setFinalAmount, setCartSummary } = useContext(CartContext)

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0
    setQty(value)
    setTotal(value * price)
    setFinalAmount(finalAmount + total)
  }

  return (
    <tr className="border-t border-gray-300">
      {/* Thumbnail */}
      <td className="w-24 h-24 p-2">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded" />
      </td>

      {/* Product Title */}
      <td className="font-semibold text-base px-4 py-2">{title}</td>

      {/* Price */}
      <td className="font-light px-4 py-2">${price}</td>

      {/* Quantity Input */}
      <td className="px-4 py-2">
        <input
          type="number"
          value={qty}
          min={1}
          className="w-16 h-10 border-2 border-primary p-2 rounded"
          onChange={handleChange}
          required
        />
      </td>

      {/* Remove Button */}
      <td><button className='text-sm font-semibold underline'>Remove</button></td>

      {/* Total Price */}
      <td className="px-4 py-2 font-medium">${total.toFixed(2)}</td>
    </tr>
  )
}

export default CardItem
