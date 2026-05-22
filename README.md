# React starters 🚀

# Food Ordering App

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


 # Exports / Imports
Two types of exports/imports:

- Default Exports/imports
export default Component;  // only one default export per file
import Component from "path";

- Named Export/ Import 
export const Component;
import {Component } from "path";

# React Hooks 
(Normal JS utility functions)
- useState() - superpowerful react variables
- useEffect() -  comes with two parameters - a callback function and a dependency array. The callback function is called when the component is mounted and whenever the dependencies in the dependency array change. If the dependency array is empty, then the callback function is called only once when the component is mounted. This is useful for fetching data from an API when the component is first rendered. In this case, we are calling the fetchData function which fetches the list of restaurants from the API and updates the state with the fetched data.
