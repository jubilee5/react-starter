import { LOGO_URL } from "../utils/constants";
import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


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

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg ">
            <div className="logo-container">
                <img className="w-16 " src={LOGO_URL} alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                     <li className="px-4 font-bold">{loggedInUser}</li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Header;