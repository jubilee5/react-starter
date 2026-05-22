import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        //props cant be used without super in the constructor of a class component. super is used to call the constructor of the parent class which is React.Component in this case. It is also used to access the props and state of the parent class. If we don't use super then we will get an error saying "Must call super constructor in derived class before accessing 'this' or returning from derived constructor".
       console.log(props);
        
       this.state = {      // using state in class component.
        count: 0,
        count2: 1.       // in class component state is a huge object that can have multiple properties.
       };
       console.log(" Child Constructor called");
    }

       
     componentDidMount() {
            console.log("Child ComponentDidMount called");
        }
    render() {
        const { name, email, location, contact } = this.props;
        // const { count, count2 } = this.state;
        const {count} = this.state;

        console.log("Child Render ")

        return (
    <div className="user-card">
        {/* <h2>  Name : {this.props.name} </h2> */}
        <h2>  Name : {name} </h2>
        {/* <h1> Count : {this.state.count}</h1> */}
        <h1> Count : {count} </h1>
        {/* <h1> Count2 : {count2} </h1> */}
        <button onClick={() => {
            this.setState({ 
                count: this.state.count + 1 }); 
                // using setState to update the state in class component. setState is a method that is used to update the state in class component. It takes an object as an argument and updates the state with the new values. It also re-renders the component with the new state values. We should never update the state directly because it will not re-render the component and it can cause bugs in some cases.
        }}>
            Increment Count
        </button>

        <h3> Email : {email} </h3>
            <h3> Location : {location} </h3>
            <h3> Contact : {contact} </h3>
      
    </div>
  );
}}

export default UserClass


//functional component is a function that returns JSX. It is a simpler way to write components that only contain a render method and don't have their own state. They are also called stateless components. They can be written as arrow functions or regular functions. They can also use hooks to manage state and lifecycle methods.

//class component is a class that extends React.Component and has a render method that returns JSX. It is a more traditional way to write components that can have their own state and lifecycle methods. They are also called stateful components. They can also use hooks to manage state and lifecycle methods but it is not recommended because it can cause confusion and bugs in some cases.

//In general, it is recommended to use functional components with hooks for most of the use cases because they are simpler and easier to read and maintain. Class components can be used in some cases where we need to use lifecycle methods that are not available in hooks or when we are working with legacy code that uses class components.

// first constructor is called and then render method is called. and then componentDidMount is called. This is the lifecycle of a class component. 


// console:
// 1. parent constructor
// 2. parent render
// 3. child constructor
// 4. child render
// 5. child componentDidMount
// 6. parent componentDidMount


// componentDidMount is used to make API calls.
// we do so because in react when our page loads we want to first render the ui and then make the api call and then re render the ui with the new data from api . we do that in FC using useEffect hook and in class component we do that using componentDidMount lifecycle method. if we make api call in the constructor or render method then it will cause an infinite loop because every time we update the state with the new data from api it will re render the component and then it will make the api call again and again. so we should never make api calls in the constructor or render method. we should always make api calls in componentDidMount lifecycle method in class component and in useEffect hook in functional component.

