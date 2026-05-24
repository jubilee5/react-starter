import React , {lazy, Suspense, useContext} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";



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
        <UserContext.Provider value={{ loggedInUser: "John Doe" }}>   
        {/*  we are providing the value for the context here. This value can be accessed by any component in the app that is wrapped by this provider. In this case, we are wrapping our entire app with this provider, so any component in the app can access the loggedInUser value from the context. provider is a component that is used to provide the value for the context.  */}
            <div className="app">
                {/* <UserContext.Provider value={{ loggedInUser: "Jubilee" }}> */}
                   {/*  we can have multiple providers for the same context in the component tree. In this case, we have two providers for the UserContext - one with the value "John Doe" and another with the value "Jubilee". The value that will be accessed by the components will be the one from the nearest provider in the component tree. So, in this case, the components will access the value "Jubilee" from the nearest provider. This is because of the way React's context API works. It will look for the nearest provider in the component tree and use its value. If there is no provider, it will use the default value defined in the createContext() function.  */}
                <Header />
                {/* </UserContext.Provider> */}
                <Outlet />   {/* This is where the children components will be rendered */}
            </div>
        </UserContext.Provider>
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