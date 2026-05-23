import { useEffect , useState} from "react";

const useRestaurantMenu = (resId) => {
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
    
  return resInfo;
  
}

export default useRestaurantMenu
