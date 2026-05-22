import { LOGO_URL } from "../utils/constants";
import { useState , useEffect, use} from "react";


// if no dependency array => useEffect will be called on every render
// if empty dependency array => useEffect will be called only on first render
// if dependency array with variables => useEffect will be called on first render and whenever the variable in the dependency array changes.
// useEffect(() => {
//     console.log("useEffect called");
// },[]); 

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;