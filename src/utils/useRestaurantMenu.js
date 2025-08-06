import { useState, useEffect } from "react"
import { MENU_API } from "../components/mockData"

const useRestaurantMenu = (resId) => {
    const[restaurantInfo, setRestaurantinfo] = useState(null) 
    const[dishData, setDishData] = useState(null) 

    useEffect(() => {
        fetchData() 
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId) 
        const json = await data.json()
        setRestaurantinfo(json.data)
        setDishData(json.data)
    }

    return { restaurantInfo, dishData }
}

export default useRestaurantMenu