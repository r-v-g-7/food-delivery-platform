import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { SWIGGY_API } from "./mockData"
import { Shimmer } from "./Shimmer"

export const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]) 
    const [listOfRestaurant, setListOfRestaurant] = useState([]) // filterRestaurant is the magic varible created by the useState() function along with setFilterRestaurant thing which will be eventually used to trigger the useState()
    const [searchfilter, setSearchFilter] = useState("") 

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        
    }, [searchfilter])

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
            setAllRestaurants(allRestaurants)

        } catch (err) {
            console.log("Error:" + err)
        
        }
        
    }



    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="search-container">
                <input className="search-input" value={searchfilter} onChange={(e) => setSearchFilter(e.target.value)} />
                <button className="search-button" onClick={() => {
                    setListOfRestaurant(allRestaurants)
                    const filteredRestaurant = allRestaurants.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchfilter.toLowerCase())
                    })
                    setListOfRestaurant(filteredRestaurant)
                }}>Search</button>
            </div> 
            <div className="top-rated-button-container">
                <button className="top-rated-button" onClick={() => {
                    let filteredRestaurant = listOfRestaurant.filter(res => res.info.avgRating > 4.2)
                    setListOfRestaurant(filteredRestaurant)
                }
                }
                >Show Top Rated Restaurants ⭐</button>
            </div>
            <div className="restaurant-cards-container">
                {listOfRestaurant.map((res, index) => <RestaurantCard key={`${res.info.id}-${index}`} resData={res} />)}
            </div>

        </div>
    )
}

 
