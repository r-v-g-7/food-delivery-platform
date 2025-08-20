import react from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addItem } from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleCartItems = (item) => {s
        dispatch(addItem(item.name))
    }
    
}

export default Cart