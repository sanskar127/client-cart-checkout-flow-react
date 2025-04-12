import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
    const [cartSummary, setCartSummary] = useState({})
    const [finalAmount, setFinalAmount] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)


    const updateQty = (itemKey, newQty, price) => {
        setCartSummary(prev => ({
            ...prev,
            [itemKey]: {
                ...prev[itemKey],
                qty: newQty,
                price: price
            }
        }))
    }

    useEffect(() => {
        // Calculate finalAmount whenever cartSummary changes
        let total = 0
        Object.values(cartSummary).forEach(item => {
            total += (item.qty || 0) * (item.price || 0)
        })
        setFinalAmount(total)
    }, [cartSummary])


    return (
        <CartContext.Provider value={{ cartSummary, setCartSummary, finalAmount, setFinalAmount, updateQty, couponDiscount, setCouponDiscount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider