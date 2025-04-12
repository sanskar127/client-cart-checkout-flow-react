import React, { useContext, useEffect } from 'react'
import { CartContext } from "../../../context/CartContext"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const CardItem = ({ productId, thumbnail, title, price }) => {
  const { cartSummary, updateQty, items, setItems } = useContext(CartContext)
  const itemKey = productId  // use productId as a unique key
  const qty = cartSummary[itemKey]?.qty || 1
  const total = qty * price

  useEffect(() => {
    if (!cartSummary[itemKey]) {
      updateQty(itemKey, 1, price, title)  // Pass title as static name
    }
  }, [cartSummary, itemKey, price, title, updateQty])

  const handleIncrement = () => {
    updateQty(itemKey, qty + 1, price, title)  // Pass title as static name
  }

  const handleDecrement = () => {
    if (qty > 1) {
      updateQty(itemKey, qty - 1, price, title)  // Pass title as static name
    }
  }

  const handleRemove = (id) => {
    // Update cart summary to remove the item
    const updatedSummary = { ...cartSummary }
    delete updatedSummary[itemKey]

    // Set the updated summary in the context
    updateQty(itemKey, 0, price, title)  // Pass title as static name

    // Filter out the item from the items array
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  return (
    <tr className="border-t border-gray-300">
      <td className="w-24 h-24 p-2">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded" />
      </td>
      <td className="px-4 py-2">
        <h3 className='font-semibold text-base'>{title}</h3>
        <button onClick={() => handleRemove(productId)} className='mt-2 text-sm underline cursor-pointer'>Remove</button>
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
