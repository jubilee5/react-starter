import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";


/***
 * chunking
 * code splitting
 * dynamic bundling
 * lazy loading
 * on demand loading
 * dynamic import
 * 
 * These are techniques to load the code only when it is needed. This can help in improving the performance of the application by reducing the initial load time. We can use React.lazy and Suspense to implement lazy loading in our application. We can also use dynamic import() to load the components dynamically when they are needed.
 */

const Grocery = lazy(() => import("./components/Grocery")); // this is a dynamic import which will load the Grocery component only when it is needed. This will help in reducing the initial load time of the application. We can also use React.lazy to load the component lazily. we have splitted our code into two bundles - one for the main application and one for the grocery component. 


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
              //we use suspense component to wrap the lazy loaded component and provide a fallback UI while the component is being loaded. The fallback UI can be a loading spinner or a message indicating that the component is being loaded. This will improve the user experience by providing feedback to the user while the component is being loaded.
                path: "/grocery",
                element: (
                    <Suspense fallback="Loading...">
                        <Grocery />
                    </Suspense>
                )
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