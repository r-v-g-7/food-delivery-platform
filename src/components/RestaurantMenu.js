import { useParams } from "react-router";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// Simplified and Classy Accordion Component
const MenuAccordion = ({ title, children, isOpen, onToggle, itemCount }) => {
  return (
    <div className="bg-white/90 rounded-2xl mb-5 transition-all duration-300">
      <button
        className="w-full px-6 py-5 flex justify-between items-center rounded-2xl transition-colors duration-150 hover:bg-gray-50"
        onClick={onToggle}
        style={{ border: "none" }}
      >
        <div className="text-left">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
          <span className="text-xs text-gray-500">{itemCount} items</span>
        </div>
        <svg
          className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : "rotate-0 text-gray-400"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-5">{children}</div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, dishData } = useRestaurantMenu(resId);
  const [openSection, setOpenSection] = useState(0);

  const dispatch = useDispatch();
  const handleCartItems = (item) => {
    dispatch(addItem(item));
  };

  // Group menu items by category for accordion
  const menuCategories = dishData?.cards
    ?.find(res => res?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(card => card?.card?.card?.itemCards)
    ?.map(card => ({
      title: card?.card?.card?.title || 'Menu Items',
      items: card?.card?.card?.itemCards?.map(itemCard => itemCard?.card?.info) || []
    })) || [];

  const {
    name,
    cloudinaryImageId,
    cuisines,
    areaName,
    locality,
    city,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    aggregatedDiscountInfo
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!restaurantInfo) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Restaurant Header - Clean and Professional */}
        <div className="bg-white rounded-2xl p-7 mb-7 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            {cloudinaryImageId && (
              <div className="flex-shrink-0">
                <img
                  src={IMG_CDN_URL + cloudinaryImageId}
                  alt={name}
                  className="w-32 h-32 object-cover rounded-xl"
                  style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
                />
              </div>
            )}

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{name}</h1>
              <p className="text-gray-600 text-base mb-2">{cuisines?.join(", ")}</p>
              <p className="text-gray-500 text-sm mb-4">
                {`${locality}${areaName ? `, ${areaName}` : ""}`}
              </p>

              {/* Stats - Minimal Design */}
              <div className="grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-orange-500 font-semibold text-sm">★</span>
                    <span className="text-gray-900 font-semibold">{avgRating}</span>
                  </div>
                  <div className="text-xs text-gray-500">{totalRatingsString}</div>
                </div>
                <div>
                  <span className="text-gray-900 font-semibold">{sla?.slaString}</span>
                  <div className="text-xs text-gray-500">Delivery</div>
                </div>
                <div>
                  <span className="text-gray-900 font-semibold">{costForTwoMessage}</span>
                  <div className="text-xs text-gray-500">For Two</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section - Simplified */}
        {aggregatedDiscountInfo?.descriptionList?.length > 0 && (
          <div className="bg-white rounded-2xl px-6 py-5 mb-7 shadow-sm">
            <h2 className="font-semibold text-lg text-gray-900 mb-3">Available Offers</h2>
            <div className="space-y-2">
              {aggregatedDiscountInfo.descriptionList.map((offer, index) => (
                <div key={`${offer.meta}-${index}`} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{offer.meta}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Section */}
        <div>
          <h2 className="font-semibold text-xl text-gray-900 mb-4">Menu</h2>

          {menuCategories.map((category, categoryIndex) => (
            <MenuAccordion
              key={categoryIndex}
              title={category.title}
              isOpen={openSection === categoryIndex}
              onToggle={() => toggleSection(categoryIndex)}
              itemCount={category.items.length}
            >
              <div className="space-y-4 mt-4">
                {category.items.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 transition-colors duration-200 hover:bg-gray-50"
                  >
                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-3 h-3 rounded-full ${item.isVeg ? "bg-green-500" : "bg-red-500"
                            }`}
                        ></div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      </div>

                      <div className="font-semibold text-gray-800 mb-2">
                        ₹{(item.price || item.defaultPrice) / 100}
                      </div>

                      {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Image and Add Button */}
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      {item.imageId && (
                        <img
                          src={IMG_CDN_URL + item.imageId}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                          style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
                        />
                      )}

                      <button
                        onClick={() => handleCartItems(item)}
                        className="border border-orange-400 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
                      >
                        ADD +
                      </button>
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
