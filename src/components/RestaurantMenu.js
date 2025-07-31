import { useState, useEffect } from "react";

export const RestaurantMenu = () => {

    const [restaurantInfo, setRestaurantInfo] = useState() 


    useEffect(() => {
        fetchData() 
    }, []) 

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.900019863776738&lng=78.04083265364169&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json() 
        console.log(json)
        setRestaurantInfo(json.data) 
    }

    

const {
    name,
    cloudinaryImageId,
    cuisines,
    areaName,
    locality,
    city,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    aggregatedDiscountInfo,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};


    return <div>
        <h1>Wlcome to {name}</h1>
    </div>
}
