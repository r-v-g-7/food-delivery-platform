import { CLOUDINARY_URL } from "./mockData"

export const RestaurantCard = (props) => {
  const { resData } = props
  const { info } = resData  
  const { name, areaName, cuisines, avgRating, cloudinaryImageId } = info
  const { sla } = info 
  const { deliveryTime } = sla 

  return <div className="card-container transition-transform duration-150 ease-out hover:scale-90">
    <img className="restaurant-img" src={CLOUDINARY_URL + cloudinaryImageId} alt="adil-hotel-logo" />
    <div className="card-info">
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

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
    <div className="relative">
        <label className="absolute top-0 left-0 bg-black text-white text-xs font-bold uppercase px-3 py-1 rounded-tl-lg rounded-br-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
