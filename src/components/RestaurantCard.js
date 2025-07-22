import { CLOUDINARY_URL } from "./mockData"

export const RestaurantCard = (props) => {
  const { resData } = props
  const { info } = resData  
  const { name, areaName, cuisines, avgRating, cloudinaryImageId } = info
  const { sla } = info 
  const { deliveryTime } = sla 
  console.log(cloudinaryImageId)

  return <div className="card-container">
    <img className="restaurant-img" src={CLOUDINARY_URL + cloudinaryImageId} alt="adil-hotel-logo" />
    <div className="card-info">
    <h4 className="restaurant-name">{name}</h4>
    <p className="restaurant-rating">⭐ {avgRating} / 5</p>
    <hr />
    <p className="restaurant-cuisines">🍽️ {cuisines.join(", ")}</p>
    <hr />
    <p className="restaurant-area">📍 {areaName}</p>
    <hr />
    <p className="restaurant-delivery">🚚 {deliveryTime} mins</p>
    </div>

  </div>
}