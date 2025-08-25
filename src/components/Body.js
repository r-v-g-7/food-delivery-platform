import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { SWIGGY_API } from "./mockData"
import { Link } from "react-router-dom"
import { WithPromotedLabel } from "./RestaurantCard"
import { Shimmer } from "./Shimmer"
import { list } from "postcss"

export const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchfilter, setSearchFilter] = useState("")

    const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard)

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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-3 bg-[grey] shadow-md mb-6 my-1">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <input
                        className="px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-64"
                        placeholder="Search restaurants..."
                        value={searchfilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                    <button
                        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md transition hover:-translate-y-1 transform transition"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md transition w-full sm:w-auto hover:-translate-y-1 transform transition"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurant.filter(
                                (res) => res.info.avgRating > 4.2
                            );
                            setListOfRestaurant(filteredRestaurant);
                        }}
                    >
                        Show Top Rated Restaurants ⭐
                    </button>
                </div>
            </div>

            <div className="text-center px-4 pt-4">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">
                    Top Picks Around You
                </h2>
                <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
            </div>


            <style>{`
  h2 {
    font-family: 'Poppins', sans-serif;
  }
`}</style>

            <div className="restaurant-cards-container">
                {listOfRestaurant.map((res, index) =>
                    <Link key={`${res.info.id}-${index}`} to={"/restaurant/" + res.info.id}>
                        {res.info.avgRating > 4.5 ? <PromotedRestaurantCard resData={res} /> : <RestaurantCard resData={res} />}
                    </Link>)}
            </div>
        </div>
    )
}
