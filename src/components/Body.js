import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { SWIGGY_API } from "./mockData"
import { Shimmer } from "./Shimmer"

export const Body = () => {

    let [listOfRestaurant, setListOfRestaurant] = useState([]) // filterRestaurant is the magic varible created by the useState() function along with setFilterRestaurant thing which will be eventually used to trigger the useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_API)
            const json = await data.json()

            const cards = json?.data?.cards || [];
            const restaurantCards = cards.filter(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            const allRestaurants = restaurantCards.flatMap(
                (card) => card.card.card.gridElements.infoWithStyle.restaurants
            );


            setListOfRestaurant(allRestaurants)

        } catch (err) {
            console.log("Error:" + err)
        }
    }



    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="top-rated-button-container">
                <button className="top-rated-button" onClick={() => {
                    let filteredRestaurant = listOfRestaurant.filter(res => res.info.avgRating > 4.2)
                    setListOfRestaurant(filteredRestaurant)
                }
                }
                >Show Top Rated ⭐</button>
            </div>
            <div className="restaurant-cards-container">
                {console.log(listOfRestaurant)}
                {listOfRestaurant.map((res, index) => <RestaurantCard key={`${res.info.id}-${index}`} resData={res} />)}
            </div>

        </div>
    )
}


