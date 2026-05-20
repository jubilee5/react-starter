import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container"> 
                   {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />      // not using a key prop will give us a warning in the console. It is used by react to identify which items have changed, are added or removed. It should be a unique value. Here we can use restaurant id as key prop. if we don't have unique id then we can use index as key prop but it is not recommended because it can cause performance issues and bugs in some cases. 
// index as a key is last resort 
                ))}
                    
            </div>
        </div>
    );
};
export default Body;