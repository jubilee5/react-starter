import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
//import resList from "../utils/mockData";

const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // useState is a hook that allows us to add state to our functional components. It returns an array with two elements - the current state and a function to update the state. We can use array destructuring to get these two elements. Here we are initializing the state with the resList which is an array of restaurant objects. We can update this state using the setListOfRestaurants function. Whenever we update the state, the component will re-render and we will see the updated list of restaurants. 

    useEffect(() => {
       // console.log("useEffect called");
       fetchData();
    }, []);

    const fetchData = async () => {

    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7509&lng=94.2037&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restaurants =
        json?.data?.cards
            ?.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
};

    // console.log("Body rendered"); // This will be called every time the component is rendered. It is used to check if the component is re-rendering or not. We can see that the component is re-rendering when we click on the filter button because we are updating the state. this will render first and then useEffect will be called.

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                    const filteredlist = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setListOfRestaurants(filteredlist);
                }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container"> 
                   {listOfRestaurants
    ?.filter((restaurant) => restaurant?.info?.id)
    ?.map((restaurant) => (
        <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
        />
))}    

 {/* not using a key prop will give us a warning in the console. It is used by react to identify which items have changed, are added or removed. It should be a unique value. Here we can use restaurant id as key prop. if we don't have unique id then we can use index as key prop but it is not recommended because it can cause performance issues and bugs in some cases. 
 index as a key is last resort  */}
                
                    
            </div>
        </div>
    );
};
export default Body;