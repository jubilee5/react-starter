import { LOGO_URL } from "../utils/constants";
import { useState  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// if no dependency array => useEffect will be called on every render
// if empty dependency array => useEffect will be called only on first render
// if dependency array with variables => useEffect will be called on first render and whenever the variable in the dependency array changes.
// useEffect(() => {
//     console.log("useEffect called");
// },[]); 

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
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