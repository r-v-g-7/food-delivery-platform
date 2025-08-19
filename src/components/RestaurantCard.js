import { CLOUDINARY_URL } from "./mockData";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, areaName, cuisines, avgRating, cloudinaryImageId } = info;
  const { sla } = info;
  const { deliveryTime } = sla;

  return (
    <div className="m-3 w-64 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer font-sans">
      <img
        className="w-full h-40 object-cover"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-3">
        <h4 className="text-lg font-bold text-gray-900 truncate mb-2">
          {name}
        </h4>
        <div className="flex justify-between items-center text-gray-700 my-2">
          <p className="flex items-center bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
            ⭐ {avgRating}
          </p>
          <p className="text-xs font-semibold">
            {deliveryTime} MINS
          </p>
        </div>
        <p className="text-gray-600 text-sm truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-500 text-xs mt-1 font-light">
          {areaName}
        </p>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-gradient-to-r from-gray-800 to-black text-yellow-300 text-[10px] font-bold uppercase px-3 py-1 rounded-md shadow-xl z-10 tracking-wider">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};



