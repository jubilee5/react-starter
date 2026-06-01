import { LOGO_URL } from "../utils/constants";
import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; 
//import logo_food from "../assets/logo_food.png";


// if no dependency array => useEffect will be called on every render
// if empty dependency array => useEffect will be called only on first render
// if dependency array with variables => useEffect will be called on first render and whenever the variable in the dependency array changes.
// useEffect(() => {
//     console.log("useEffect called");
// },[]); 

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

//subscribing to the store using a selector -  selector is a hook inside react. 
    const cartItems = useSelector((store) => store.cart.items); // this is how we can access the state from the store in our components. useSelector is a hook that allows us to extract data from the Redux store state, using a selector function. The selector function receives the entire store state as its only argument and should return the part of the state that we want to access.
    console.log(cartItems); 
   

    return (
        <div className="flex justify-between bg-linear-to-r from-pink-100 to-pink-50 shadow-xl px-4">
            <div className="logo-container">
                <img className="w-20  p-4 transition-transform duration-300 hover:scale-110" src={LOGO_URL} alt="logo"/>        
            </div>
            <div className="flex items-center">
                <ul className="flex items-center gap-6 text-gray-700 font-medium">
                    <li className="">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4 hover:text-pink-600 transition duration-200 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:text-pink-600 transition duration-200 cursor-pointer">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 hover:text-pink-600 transition duration-200 cursor-pointer">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 hover:text-pink-600 transition duration-200 cursor-pointer">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 hover:text-pink-600 transition duration-200 cursor-pointer">
                        <Link to="/cart">  🛒 Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-pink-600 hover:scale-105 transition duration-200" onClick={() => {
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                     <li className="font-bold text-pink-700 px-4 py-2 ">{loggedInUser}</li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Header;