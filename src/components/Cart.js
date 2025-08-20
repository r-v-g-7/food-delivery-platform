import react from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { H1Icon } from "@heroicons/react/16/solid"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()
    
    return (
        <div>
            {cartItems.map((item, index) => 
            <div key={item.id + index}>
                <h3>{item.name}</h3>
                <h3>{item.id}</h3>
                <h3>{item.description}</h3>
                <h3>Rs. {item.price/100}</h3>
                <h3>{item.itemAttribute.vegClassifier}</h3>
                <h3>{item.type}</h3>

            </div>
            )} 
        </div>
    )

}

export default Cart