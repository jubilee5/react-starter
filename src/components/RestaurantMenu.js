import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams(); // this is a dummy restaurant id. We will get the actual restaurant id from the url when we click on a restaurant card. We can use useParams hook from react-router-dom to get the restaurant id from the url.
    const resInfo = useRestaurantMenu(resId); // this is a custom hook that we will create to fetch the restaurant menu data. We will pass the restaurant id as an argument to the custom hook and it will return the restaurant menu data. We can use this restaurant menu data to show the restaurant menu in the UI.

    const [showIndex, setShowIndex] = useState(null); // this state variable is used to show or hide the items of a restaurant category. We will pass this state variable as a prop to the restaurant category component and it will use this state variable to show or hide the items of that category. We will also pass a function to update this state variable to the restaurant category component so that it can update the state variable when the user clicks on the category title. This way we can manage the show/hide state of all the categories in one place which is the restaurant menu component.

if (resInfo === null) {
    return <Shimmer />;
}
   const restaurantInfo =
    resInfo?.cards?.find(
        (card) => card?.card?.card?.info
    )?.card?.card?.info;

const { name, cuisines, costForTwoMessage } =
restaurantInfo || {};

const regularCards =
    resInfo?.cards?.find(
        (card) => card?.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const categories =
    regularCards?.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return  (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl"> {name} </h1>
       <p className="font-semibold text-lg">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>

            <div>
                {categories?.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index===showIndex ? true :false} 
                        setShowIndex={() => setShowIndex(index)} // we are passing a function to update the showIndex state variable. When the user clicks on the category title, this function will be called and it will update the showIndex state variable with the index of the clicked category. This way we can show or hide the items of the clicked category based on the value of showIndex state variable.
                    />
                ))}
            </div>
        </div>
    );
};


export default RestaurantMenu

