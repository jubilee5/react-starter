import { CON_URL } from "../utils/constants";
const ItemList = ({items, dummy}) => {
        // console.log(dummy);
  return (
    <div>
        {items?.map((item) => (
            <div key={item?.card?.info?.id} 
            className="border-b border-gray-300 p-4 flex justify-between">
                    
                <div className="w-9/12">
                <div className="py-2">
                <h3 className="font-semibold">
                    {item?.card?.info?.name}</h3>
                <p>₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</p>
                <p className="text-sm text-gray-500">
                    {item?.card?.info?.description}</p>
                </div>
                
                
                </div>
                <div className="w-3/12">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Add +
                </button>
                <img className="h-24 w-full object-cover rounded" src={CON_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                </div>
            </div>
            
        ))}
      
    </div>
  )
}

export default ItemList

