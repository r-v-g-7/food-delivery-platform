import { CLOUDINARY_URL } from "./mockData"

export const RestaurantCard = (props) => {
  const { resData } = props
  const { info } = resData  
  const { name, areaName, cuisines, avgRating, cloudinaryImageId } = info
  const { sla } = info 
  const { deliveryTime } = sla 

  return <div className="card-container">
    <img className="restaurant-img transition-transform duration-300 ease-in-out hover:scale-110" src={CLOUDINARY_URL + cloudinaryImageId} alt="adil-hotel-logo" />
    <div className="card-info transition-transform duration-300 ease-in-out hover:scale-110">
    <h4 className="restaurant-name">{name}</h4>
    <p className="restaurant-rating">⭐ {avgRating}</p>
    <hr />
    <p className="restaurant-cuisines">🍽️ {cuisines.join(", ")}</p>
    <hr />
    <p className="restaurant-area">📍 {areaName}</p>
    <hr />
    <p className="restaurant-delivery">🚚 {deliveryTime} mins</p>
    </div>

  </div>
}