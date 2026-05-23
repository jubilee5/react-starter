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
        } = resData?.info || {};    // Destructuring props for better readability
    
    
        return (
        <div className="m-4 p-4 w-62.5  bg-gray-100 rounded-lg hover:bg-gray-200" >
             <img 
            className="rounded-lg h-40 w-full object-cover" src = {CON_URL + cloudinaryImageId} alt="res-logo"
             />
            <h3 className="font-bold py-4 text-lg line-clamp-2">{name}</h3>
            <h4 className="line-clamp-2 text-sm">{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.slaString} </h4>     {/* delivery time */}
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