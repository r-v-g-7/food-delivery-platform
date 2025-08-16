import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Loading from "./Loading";

// Accordion Component
const MenuAccordion = ({ title, children, isOpen, onToggle, itemCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-3 overflow-hidden">
      <button
        className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full">
            {itemCount}
          </span>
        </div>
        
        <div className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-3 pb-3 border-t border-gray-100 bg-gray-50/30">
          {children}
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, dishData } = useRestaurantMenu(resId);
  const [openSection, setOpenSection] = useState(null);


  // Group menu items by category for accordion
  const menuCategories = dishData?.cards
    ?.find(res => res?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(card => card?.card?.card?.itemCards)
    ?.map(card => ({
      title: card?.card?.card?.title || 'Menu Items',
      items: card?.card?.card?.itemCards?.map(itemCard => itemCard?.card?.info) || []
    })) || [];

  const { name, cloudinaryImageId, cuisines, areaName, locality, city, avgRating, totalRatingsString,
    costForTwoMessage, sla, aggregatedDiscountInfo } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!restaurantInfo) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">

      <ScrollToTop />
      {/* Wider container with compressed vertical spacing */}
      <div className="max-w-5xl mx-auto p-3">
        
        {/* Restaurant Header - More Compressed */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-3">
          <div className="mb-3">
            <h1 className="text-xl font-bold text-gray-900 mb-1">{name}</h1>
            <p className="text-gray-600 mb-1 text-sm">{cuisines?.join(', ')}</p>
            <p className="text-gray-500 text-xs">{`${locality}, ${areaName}`}</p>
          </div>
          
          <div className="border-t border-gray-100 pt-3">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {avgRating}
                </div>
                <span className="text-gray-500 text-xs">({totalRatingsString})</span>
              </div>
              
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-xs">{sla?.slaString}</span>
              </div>
              
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
                <span className="font-medium text-xs">{costForTwoMessage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section - Compressed */}
        {aggregatedDiscountInfo?.descriptionList?.length > 0 && (
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 p-3 mb-3">
            <h2 className="flex items-center gap-2 font-semibold text-base text-gray-800 mb-2">
              🎉 <span>Special Offers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {aggregatedDiscountInfo.descriptionList.map((offer, index) => (
                <div key={`${offer.meta}-${index}`} className="flex items-center gap-2 bg-white/70 rounded-lg p-2 border border-orange-100">
                  <div className="text-orange-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800 text-sm">{offer.meta}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Categories with Accordion - Compressed */}
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-gray-900 mb-2 px-1">Menu</h2>
          
          {menuCategories.map((category, categoryIndex) => (
            <MenuAccordion
              key={categoryIndex}
              title={category.title}
              isOpen={openSection === `category-${categoryIndex}`}
              onToggle={() => toggleSection(`category-${categoryIndex}`)}
              itemCount={category.items.length}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2">
                {category.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-3 h-3 border flex items-center justify-center ${
                            item.isVeg ? 'border-green-600' : 'border-red-600'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-green-600' : 'bg-red-600'
                            }`}></div>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h4>
                        </div>
                        
                        <div className="mb-1">
                          <span className="font-bold text-gray-900 text-sm">
                            ₹{(item.price || item.defaultPrice) / 100}
                          </span>
                        </div>
                        
                        {item.description && (
                          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                        {item.imageId && (
                          <div className="relative">
                            <img 
                              className="w-16 h-16 object-cover rounded-lg" 
                              src={IMG_CDN_URL + item.imageId} 
                              alt={item.name}
                            />
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                              <button className="bg-white border-2 border-orange-500 text-orange-600 px-2 py-1 rounded text-xs font-bold hover:bg-orange-500 hover:text-white transition-colors duration-200">
                                ADD
                              </button>
                            </div>
                          </div>
                        )}
                        {!item.imageId && (
                          <button className="bg-white border-2 border-orange-500 text-orange-600 px-3 py-1 rounded text-xs font-bold hover:bg-orange-500 hover:text-white transition-colors duration-200">
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MenuAccordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
