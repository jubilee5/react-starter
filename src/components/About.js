import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log(" Parent Constructor called");
    }
        componentDidMount() {      //
            // console.log("Parent ComponentDidMount called");
        }
    render() {
        // console.log("Parent Render ")
        return (
            <div>
                <h1>About Us</h1>
                <h2> This is my food delivery app</h2>
                {/* <User name = {"Jubilee Sharma (functional component) "}  /> */}
                <UserClass name = {"First "} location = {"India"} />
                {/* <UserClass name = {"Second "} location = {"Los Angeles"} /> */}
              
            </div>
        );
    }
}

export default About;

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2> This is my food delivery app</h2>
           
//             <UserClass name = {"Jubilee Sharma (class component) "}  />
//         </div>
//     );
// };

// export default About;
        



// console:
// 1. parent constructor
// 2. parent render
// 3. child constructor
// 4. child render


// console:
/** if we have multiple child components
 * console:
1. parent constructor
2. parent render
3. child1 constructor
4. child1 render
5. child2 constructor
6. child2 render

   <DOM updates happen here>

7. child1 componentDidMount
8. child2 componentDidMount
9. parent componentDidMount
 */