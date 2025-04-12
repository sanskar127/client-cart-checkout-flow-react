import React, { useContext, useEffect } from 'react'
import { CartContext } from "../../../context/CartContext"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const CardItem = ({ thumbnail, title, price }) => {
  const { cartSummary, updateQty } = useContext(CartContext)
  const itemKey = title
  const qty = cartSummary[itemKey]?.qty || 1
  const total = qty * price

  useEffect(() => {
    if (!cartSummary[itemKey]) {
      updateQty(itemKey, 1, price)
    }
  }, [cartSummary, itemKey, price, updateQty])

  const handleIncrement = () => {
    updateQty(itemKey, qty + 1, price)
  }

  const handleDecrement = () => {
    if (qty > 1) {
      updateQty(itemKey, qty - 1, price)
    }
  }

  return (
    <tr className="border-t border-gray-300">
      <td className="w-24 h-24 p-2">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded" />
      </td>
      <td className="px-4 py-2">
        <h3 className='font-semibold text-base'>{title}</h3>
        <button className='mt-2 text-sm underline cursor-pointer'>Remove</button>
      </td>
      <td className="font-light px-4 py-2">${price}</td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <button onClick={handleDecrement} className="p-1 border rounded text-primary hover:bg-primary hover:text-white cursor-pointer">
            <AiOutlineMinus />
          </button>
          <span className="px-2">{qty}</span>
          <button onClick={handleIncrement} className="p-1 border rounded text-primary hover:bg-primary hover:text-white cursor-pointer">
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td className="px-4 py-2 font-medium">${total.toFixed(2)}</td>
    </tr>
  )
}

export default CardItem
