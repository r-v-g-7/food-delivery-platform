import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { SWIGGY_API } from "./mockData"
import { Link } from "react-router-dom"
import Loading from "./Loading"


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



    return listOfRestaurant.length === 0 ? <Loading /> : (
        <div className="body-container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-3 bg-white shadow-md rounded-lg mb-6">
                {/* Search Container */}
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

                {/* Top Rated Button */}
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


