import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { SWIGGY_API } from "./mockData"
import { Shimmer } from "./Shimmer"
import { Link } from "react-router-dom"

export const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [listOfRestaurant, setListOfRestaurant] = useState([]) // filterRestaurant is the magic varible created by the useState() function along with setFilterRestaurant thing which will be eventually used to trigger the useState()
    const [searchfilter, setSearchFilter] = useState("")

    const handleSearch = () => {
        const filteredRestaurant = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchfilter.toLowerCase())
        );
        setListOfRestaurant(filteredRestaurant);
    };


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

            const uniqueRestaurantMap = new Map()
            allRestaurants.forEach((res) => {
                const id = res?.info?.id
                if (id && !uniqueRestaurantMap.has(id)) {
                    uniqueRestaurantMap.set(id, res)
                }
            })

            const uniqueRestaurants = Array.from(uniqueRestaurantMap.values())

            setListOfRestaurant(uniqueRestaurants)
            setAllRestaurants(uniqueRestaurants)


        } catch (err) {
            console.log("Error:" + err)

        }

    }



    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="search-container">
                <input className="search-input" value={searchfilter} onChange={(e) => setSearchFilter(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { handleSearch()} }} />
                <button className="search-button" onClick={() => {
                    handleSearch()
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
                {console.log(listOfRestaurant)}
                {listOfRestaurant.map((res, index) =>
                    <Link key={`${res.info.id}-${index}`} to={"/restaurant/" + res.info.id}>
                        <RestaurantCard resData={res} />
                    </Link>)}
            </div>

        </div>
    )
}


