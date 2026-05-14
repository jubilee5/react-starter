import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 * -nav items
 * Body 
 * - search bar
 * - restaurantContainer
 * - restaurantCard
 *       -Img
 *       -Name of res, cuisine, rating, delivery time
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */ 


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Mast Biryani</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container"> </div>
                    <RestaurantCard />
        </div>
    );
};
                
         

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />    
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);