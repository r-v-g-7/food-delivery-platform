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

    const menuCategories = dishData?.cards
    ?.find(res => res?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(card => card?.card?.card?.itemCards)
    ?.map(card => ({
      title: card?.card?.card?.title || 'Menu Items',
      items: card?.card?.card?.itemCards?.map(itemCard => itemCard?.card?.info) || []
    })) || [];

    return { restaurantInfo, dishData, menuCategories }
}

export default useRestaurantMenu