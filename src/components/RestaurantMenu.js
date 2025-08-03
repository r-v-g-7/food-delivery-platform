import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { MENU_API } from "./mockData";
import { useParams } from "react-router";

export const RestaurantMenu = () => {

  const {resId} = useParams()
  const [restaurantInfo, setRestaurantInfo] = useState(null)
  const [dishData, setDishData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch(MENU_API + resId)
    const json = await data.json()
    setRestaurantInfo(json.data)
    setDishData(json.data)
  }


  const allItemInfos = dishData?.cards
    ?.find(res => res?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(card => card?.card?.card?.itemCards)
    ?.flatMap(card => card.card.card.itemCards)
    ?.map(itemCard => itemCard?.card?.info);


  const { name, cloudinaryImageId, cuisines, areaName, locality, city, avgRating, totalRatingsString,
    costForTwoMessage, sla, aggregatedDiscountInfo } = restaurantInfo?.cards[2]?.card?.card?.info || {}

  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return restaurantInfo === null ? <Shimmer /> :
    (
      <div className="container">
        <div className="info-card">
          <div className="info-header">
            <div className="info-header-text">
              <h1>{name}</h1>
              <p>{cuisines?.join(', ')}</p>
              <p>{`${locality}, ${areaName}`}</p>
            </div>
            <div className="rating-box">
              <div className="rating-value">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                {avgRating}
              </div>
              <hr />
              <span className="total-ratings">{totalRatingsString}</span>
            </div>
          </div>
          <hr className="dashed" />
          <div className="info-footer">
            <div className="info-footer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>{sla?.slaString}</span>
            </div>
            <div className="info-footer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span>{costForTwoMessage}</span>
            </div>
          </div>
        </div>

        {aggregatedDiscountInfo?.descriptionList?.length > 0 && (
          <div className="deals-section">
            <h2 className="deals-title">Deals for you</h2>
            <div className="deals-grid">
              {aggregatedDiscountInfo.descriptionList.map((offer, index) => (
                <div key={`${offer.meta}-${index}`} className="deal-card">
                  <div className="deal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                  </div>
                  <p className="deal-text">{offer.meta}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="menu-section">
          <h2 className="menu-title">Menu</h2>
          <div className="menu-items-container">
            {allItemInfos?.map((item, index) => (
              <div key={`${item.id}-${index}`} className="menu-item">
                <div className="menu-item-details">
                  <div className={item.isVeg ? 'veg-icon' : 'non-veg-icon'}>
                    <div className={item.isVeg ? 'veg-dot' : 'non-veg-dot'}></div>
                  </div>
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-price">₹{(item.price || item.defaultPrice) / 100}</p>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
                <div className="menu-item-image-wrapper">
                  {item.imageId && <img className="menu-item-image" src={IMG_CDN_URL + item.imageId} alt={item.name} />}
                  <button className="add-button">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    )
}




