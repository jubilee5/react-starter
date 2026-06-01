import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props; // Destructuring props to get restaurant data

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo, 
        rating, 
        sla,
        } = resData?.info || {};   // Destructuring props for better readability
    
    
        return (
      <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <img
            className="h-48 w-full object-cover" src = {CON_URL + cloudinaryImageId} alt="res-logo"
             />
            <h3 className="font-bold text-lg px-4 pt-3 line-clamp-2 text-gray-800 min-h-[52px] ">{name}</h3>
            <h4 className="px-4 mt-1 text-gray-500 text-sm line-clamp-2 min-h-[38px]">{cuisines?.join(", ")}</h4>
            <h4 className="px-4 mt-2 font-semibold text-green-600">
               ⭐{avgRating} stars</h4>
            <h4 className="px-4 mt-1 text-gray-700">{costForTwo} </h4>
            <h4 className="px-4 pb-4 mt-1 text-gray-600"> 🚴🏻‍♀️{sla?.slaString} </h4>     {/* delivery time */}
        </div>
    );
};

// Higher order Component
// input - RestaurantCard => output - PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-red-500 text-white px-2 py-1 absolute m-2 rounded">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;