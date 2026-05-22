import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />   {/* This is where the children components will be rendered */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
             {
                path: "/restaurant/:resId", // dynamic route for restaurant details page. :resId is a placeholder for the actual restaurant id which will be passed in the url when we click on a restaurant card.
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);
    


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);