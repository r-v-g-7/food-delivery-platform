import { RestaurantCard } from "./RestaurantCard"
import { resArr } from "./mockData" 

export const Body = () => (
  <div className="body-container">
    <h3>search</h3>
    <div className="restaurant-cards-container">
      {resArr.map(res => <RestaurantCard key = {res.info.id} resData={res}/>)}
    </div>

  </div>

)