import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
    const [cartSummary, setCartSummary] = useState({})
    const [finalAmount, setFinalAmount] = useState(0)

    return (
        <CartContext.Provider value={{ cartSummary, setCartSummary, finalAmount, setFinalAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider