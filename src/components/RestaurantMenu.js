import { useParams } from "react-router";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// Accordion Component with improved animations
const MenuAccordion = ({ title, children, isOpen, onToggle, itemCount }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full text-left p-5 flex justify-between items-center hover:bg-gradient-to-r hover:from-gray-50 hover:to-orange-50 transition-all duration-300 group"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-700 transition-colors duration-200">
            {title}
          </h3>
          <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-200 shadow-sm">
            {itemCount} items
          </span>
        </div>

        <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-180 text-orange-600' : 'rotate-0 text-gray-400'
          } group-hover:text-orange-600`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-5 pb-5 border-t border-gray-100 bg-gradient-to-br from-gray-50/50 to-orange-50/30">
          {children}
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, dishData } = useRestaurantMenu(resId);
  const [openSection, setOpenSection] = useState(0); // Open first section by default

  const dispatch = useDispatch()
  const handleCartItems = () => {
    dispatch(addItem("burger"))
  }

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/20">
      <ScrollToTop />

      {/* Enhanced container with better spacing */}
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Restaurant Header - Enhanced Design */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 backdrop-blur-sm bg-white/95">
          {/* Restaurant Image and Basic Info */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {cloudinaryImageId && (
              <div className="flex-shrink-0">
                <img
                  className="w-full lg:w-48 h-48 object-cover rounded-2xl shadow-md border border-gray-200"
                  src={IMG_CDN_URL + cloudinaryImageId}
                  alt={name}
                />
              </div>
            )}

            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent mb-2">
                  {name}
                </h1>
                <p className="text-gray-600 mb-2 text-lg font-medium">{cuisines?.join(', ')}</p>
                <p className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {`${locality}, ${areaName}`}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row with Enhanced Design */}
          <div className="border-t border-gray-100 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="flex items-center bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-md">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {avgRating}
                </div>
                <div>
                  <p className="font-semibold text-green-800">Rating</p>
                  <p className="text-green-600 text-sm">({totalRatingsString})</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Delivery Time</p>
                  <p className="text-blue-600 font-medium">{sla?.slaString}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="bg-orange-600 text-white p-3 rounded-lg shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-orange-800">Cost for Two</p>
                  <p className="text-orange-600 font-medium">{costForTwoMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section - Enhanced */}
        {aggregatedDiscountInfo?.descriptionList?.length > 0 && (
          <div className="bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 rounded-2xl border-2 border-orange-200 p-6 mb-6 shadow-lg">
            <h2 className="flex items-center gap-3 font-bold text-xl text-gray-800 mb-4">
              <span className="text-2xl">🎉</span>
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Special Offers
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aggregatedDiscountInfo.descriptionList.map((offer, index) => (
                <div key={`${offer.meta}-${index}`} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="text-orange-600 bg-orange-100 p-2 rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-800">{offer.meta}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Categories - Enhanced Accordion */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent">
              Our Menu
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
          </div>

          {menuCategories.map((category, categoryIndex) => (
            <MenuAccordion
              key={categoryIndex}
              title={category.title}
              isOpen={openSection === categoryIndex}
              onToggle={() => toggleSection(categoryIndex)}
              itemCount={category.items.length}
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                {category.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 border-2 flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'
                              }`}></div>
                          </div>
                          <h4 className="font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200 line-clamp-1">
                            {item.name}
                          </h4>
                        </div>

                        <div className="mb-3">
                          <span className="font-bold text-gray-900 text-lg">
                            ₹{(item.price || item.defaultPrice) / 100}
                          </span>
                        </div>

                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                        {item.imageId && (
                          <div className="relative group/image">
                            <img
                              className="w-20 h-20 object-cover rounded-xl shadow-md border-2 border-gray-200 group-hover/image:border-orange-300 transition-all duration-300"
                              src={IMG_CDN_URL + item.imageId}
                              alt={item.name}
                            />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                              <button onClick={handleCartItems} className="bg-white border-2 border-orange-500 text-orange-600 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-200 hover:scale-110">
                                ADD +
                              </button>
                            </div>
                          </div>
                        )}
                        {!item.imageId && (
                          <button onClick={handleCartItems({})} className="bg-white border-2 border-orange-500 text-orange-600 px-6 py-2 rounded-lg text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-200 hover:scale-110">
                            ADD +
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
