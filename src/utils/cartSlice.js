import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["burger", "fries"],
        
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state directly is not recommended in redux, but with createSlice, we can write "mutating" logic in our reducers. It doesn't actually mutate the state because it uses the Immer library under the hood, which allows us to write code that looks like it's mutating the state, but it actually creates a new state object. So, when we call state.items.push(action.payload), it will create a new state object with the updated items array. This is a convenient way to write reducers without having to worry about immutability.
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// we have created a slice of the store for the cart. A slice is a collection of reducer logic and actions for a single feature of the app. In this case, we have created a slice for the cart feature. The createSlice function takes an object as an argument with the following properties:
// name: a string that is used to identify the slice. This will be used as the prefix for the action types.
// initialState: the initial state of the slice. This can be an object, array, or any other data type.
// reducers: an object that contains the reducer functions for the slice. Each reducer function takes the current state and an action as arguments and returns the new state. The keys of this object will be used as the action types for the slice.
