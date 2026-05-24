import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams(); // this is a dummy restaurant id. We will get the actual restaurant id from the url when we click on a restaurant card. We can use useParams hook from react-router-dom to get the restaurant id from the url.
    const resInfo = useRestaurantMenu(resId); // this is a custom hook that we will create to fetch the restaurant menu data. We will pass the restaurant id as an argument to the custom hook and it will return the restaurant menu data. We can use this restaurant menu data to show the restaurant menu in the UI.
 
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
                {categories?.map((category) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                    />
                ))}
            </div>
        </div>
    );
};


export default RestaurantMenu

