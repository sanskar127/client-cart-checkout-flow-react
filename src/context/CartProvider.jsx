import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
    const [cartSummary, setCartSummary] = useState({})
    const [items, setItems] = useState([])
    const [finalAmount, setFinalAmount] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [formStep, setFormStep] = useState(1); // Step to control which component is shown
    const [customerData, setCustomerData] = useState({})
    const [active, setActive] = useState(false)

    const updateQty = (itemKey, newQty, price, title) => {
        setCartSummary(prev => ({
            ...prev,
            [itemKey]: {
                ...prev[itemKey],
                title,
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
        <CartContext.Provider value={{
            cartSummary, setCartSummary, finalAmount, setFinalAmount, updateQty, couponDiscount, setCouponDiscount, items, setItems, formStep, setFormStep, customerData, setCustomerData, active, setActive
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider