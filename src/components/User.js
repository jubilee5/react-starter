import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        console.log("Child useEffect called");
    }, []); 
  return (
    <div className="user-card">
        <h2>  Name : {name} </h2>
        <h3> Email : jubilee.sharma@gmail.com </h3>
            <h3> Location : Assam </h3>
            <h3> Contact : @jubileesharma </h3>
            <h1> Count : {count} </h1>
            <h1> Count2 : {count2} </h1>
    </div>
  )
}

export default User
