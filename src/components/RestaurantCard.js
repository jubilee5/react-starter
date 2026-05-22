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
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>  
             <img 
            className="res-logo" src = {CON_URL + cloudinaryImageId} alt="res-logo"
             />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.slaString} </h4>     {/* delivery time */}
        </div>
    );
};
export default RestaurantCard;