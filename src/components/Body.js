import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect, useContext } from "react";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // useState is a hook that allows us to add state to our functional components. It returns an array with two elements - the current state and a function to update the state. We can use array destructuring to get these two elements. Here we are initializing the state with the resList which is an array of restaurant objects. We can update this state using the setListOfRestaurants function. Whenever we update the state, the component will re-render and we will see the updated list of restaurants. 

    const [filteredRestaurant, setFilteredRestaurant] = useState([]); // This state variable is used to store the filtered list of restaurants based on the search text. We can update this state variable when the user clicks on the search button. We can also use this state variable to show the filtered list of restaurants in the UI.

    const [searchText, setSearchText] = useState(""); 
    console.log("Body rendered"); 

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // This is a higher order component. It is a function that takes a component as an argument and returns a new component. Here we are creating a new component called RestaurantCardPromoted which is a promoted version of the RestaurantCard component. We can use this new component in our UI to show the promoted restaurants.

    useEffect(() => {
       // console.log("useEffect called");
       fetchData();
    }, []); // comes with two arguments - a callback function and a dependency array. 

    const fetchData = async () => {

    const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7509&lng=94.2037&page_type=DESKTOP_WEB_LISTING"
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
    setFilteredRestaurant(restaurants);
};

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) {
    return (
        <h1> Looks like you are offline. Please check your internet connection. </h1>
    );
}
const {loggedInUser, setUserName} = useContext(UserContext);

// Conditional rendering - if restaurant list is empty then show shimmer UI otherwise show the restaurant cards. This is a common pattern in React applications to show a loading state while the data is being fetched. We can also show an error message if there is an error while fetching the data.
// if (listOfRestaurants.length === 0) {
//     return <Shimmer />;
// }

    // console.log("Body rendered"); // This will be called every time the component is rendered. It is used to check if the component is re-rendering or not. We can see that the component is re-rendering when we click on the filter button because we are updating the state. this will render first and then useEffect will be called.

    return listOfRestaurants.length === 0 ? <Shimmer/> : (      //using ternary operator for conditional rendering.
        <div className="body">
            <div className="filter flex  items-center">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className=" border border-solid border-black"
                    placeholder="Search for restaurants..." 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                     />     
                    {/* placeholder is used to show a hint to the user about what to enter in the input field.
                     value is the current value of the input field 
                     onChange is called when the user types in the input field
                     e.target.value is the new value of the input field */}
                    <button className="px-2 m-2 bg-green-100 rounded-lg"
                        onClick={() => {
                            //filter restaurant cards based on search text and update the ui
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);

                        }}>
                        Search</button>
                </div>

                <button 
                    className="px-2 m-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                    const filteredlist = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setListOfRestaurants(filteredlist);
                }}
                >
                    Top Rated Restaurants
                    </button>
           
            <div className="search m-4 p-4 flex items-center">
                <label>UserName: </label>
                <input className="border border-black px-2" 
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
             </div>
            <div className="flex flex-wrap"> 
                   {filteredRestaurant
    ?.filter((restaurant) => restaurant?.info?.id)
   ?.map((restaurant) => (
        <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
        >
            {/** if the restaurant is promoted, then add a promoted label to it */}
            {restaurant.info.isOpen ? ( //in the swiggy api, the promoted is missing, therefore using the isOpen property to check if the restaurant is promoted or not. This is just for demonstration purposes, in real application we should use the promoted property to check if the restaurant is promoted or not. */}
                <RestaurantCardPromoted resData={restaurant} />
            ) : (
                <RestaurantCard resData={restaurant} />
            )}
        </Link>
))}    

 {/* not using a key prop will give us a warning in the console. It is used by react to identify which items have changed, are added or removed. It should be a unique value. Here we can use restaurant id as key prop. if we don't have unique id then we can use index as key prop but it is not recommended because it can cause performance issues and bugs in some cases. 
 index as a key is last resort  */}
                
                    
            </div>
        </div>
    );
};
export default Body;