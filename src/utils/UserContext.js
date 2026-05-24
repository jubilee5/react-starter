import { createContext } from "react";

const UserContext = createContext({
   loggedInUser: "Default User", // this is the default value of the context. It is used when we don't have a provider for this context in the component tree. We will update this value when we create a provider for this context and wrap our app with that provider. This way we can have a global state for the logged in user that can be accessed by any component in the app without having to pass it down as props through multiple levels of the component tree. This is one of the main benefits of using context API in React.
    
});

export default UserContext;