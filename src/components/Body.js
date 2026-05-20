import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList); // useState is a hook that allows us to add state to our functional components. It returns an array with two elements - the current state and a function to update the state. We can use array destructuring to get these two elements. Here we are initializing the state with the resList which is an array of restaurant objects. We can update this state using the setListOfRestaurants function. Whenever we update the state, the component will re-render and we will see the updated list of restaurants. 
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                    const filteredlist = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredlist);
                }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container"> 
                   {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />      // not using a key prop will give us a warning in the console. It is used by react to identify which items have changed, are added or removed. It should be a unique value. Here we can use restaurant id as key prop. if we don't have unique id then we can use index as key prop but it is not recommended because it can cause performance issues and bugs in some cases. 
// index as a key is last resort 
                ))}
                    
            </div>
        </div>
    );
};
export default Body;