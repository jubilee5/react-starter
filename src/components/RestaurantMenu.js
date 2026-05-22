import { useEffect , useState} from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams(); // this is a dummy restaurant id. We will get the actual restaurant id from the url when we click on a restaurant card. We can use useParams hook from react-router-dom to get the restaurant id from the url.
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []); 

  const fetchMenu = async () => {

    try {
const data = await fetch(
    "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7619079&lng=94.2110386&restaurantId="  + resId + "&catalog_qa=undefined&submitAction=ENTER" 
    )


        const text = await data.text();

        console.log(text);

        const json = JSON.parse(text);

       setResInfo(json.data);

    } catch (error) {

        console.log(error);

    }
};
 
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

