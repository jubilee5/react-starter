import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer, 
       // user : userReducer, //we can add more reducers for other features of the app as well. 
        //this reducer is our app's big reducer that combines all the reducers for the different features of the app. In this case, we have only one reducer for the cart feature, but we can add more reducers for other features as well. The key of the reducer will be used as the name of the slice in the store. In this case, we have named our slice "cart". This means that the state for this slice will be available in the store under the "cart" key. We can then access this state in our components using the useSelector hook from react-redux.
    },

});

export default appStore;




//here we use keyword "reducer" as it is the whole big reducer that holds all the reducers. but when we are creating a slice there can be multiple small reducers therefore we use the keyword "reducers"




// this @reduxjs/toolkit has things to do with redux store. but when we have to provide the store to our app(a react application), we have to use the Provider component from react-redux. react/redux is like a bridge between react and redux. therefore in App.js we have to import the Provider component from react-redux 