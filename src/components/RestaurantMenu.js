import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null)


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.900019863776738&lng=78.04083265364169&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log(json)
        setRestaurantInfo(json.data)
    }



    const { name, cloudinaryImageId, cuisines, areaName, locality, city, avgRating, totalRatingsString,
        costForTwoMessage, sla, aggregatedDiscountInfo } = restaurantInfo?.cards[2]?.card?.card?.info || {}


    return restaurantInfo === null ? <Shimmer /> :
        (
            <div className="page-container">
      <div className="content-wrapper">
        
        {/* Main Restaurant Info Card */}
        <div className="info-card">
          <div className="info-header">
            <h1 className="res-name">{name}</h1>
            <p className="res-cuisines">{cuisines?.join(', ')}</p>
            <p className="res-location">{`${locality}, ${areaName}, ${city}`}</p>
          </div>
          
          <div className="details-footer">
            <div className="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span><strong>{avgRating}</strong> ({totalRatingsString})</span>
            </div>
            <div className="detail-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>{sla?.slaString}</span>
            </div>
            <div className="detail-item">
              <span>{costForTwoMessage}</span>
            </div>
          </div>
        </div>

        {/* Deals Section */}
        {aggregatedDiscountInfo?.descriptionList?.length > 0 && (
          <div className="deals-section">
            <h2 className="deals-heading">Deals for you</h2>
            <div className="deals-grid">
              {aggregatedDiscountInfo.descriptionList.map((offer, index) => (
                <div key={index} className="deal-card">
                  <div className="deal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                  </div>
                  <p className="deal-text">{offer.meta}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
        )
}
