import { useEffect , useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
      const [resInfo, setResInfo] = useState(null);
    
        useEffect(() => {
            fetchMenu();
        }, []); 
    
      const fetchMenu = async () => {
    
        try {
            const data = await fetch(MENU_API  + resId  );
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
