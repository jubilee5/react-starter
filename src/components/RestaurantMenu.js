import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

const itemCards =
    regularCards
        ?.filter(
            (c) =>
                c?.card?.card?.itemCards
        )
        ?.flatMap(
            (c) => c.card.card.itemCards
        );

  return  (
    <div className="menu">
        <h1> {name} </h1>
        <h2> {cuisines?.join(", ")} </h2>
        <ul>
            {itemCards?.map((item, index) => (
                <li key={item.card.info.id + "-" + index}>{item.card.info.name} - {item.card.info.price || item.card.info.defaultPrice}
                 </li>
                   
            ))}
        </ul>
      
    </div>
  )
}

export default RestaurantMenu

