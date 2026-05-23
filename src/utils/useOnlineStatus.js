// before writing a custom hook we need to know only two things - what it will take as a argument and what it will return. 

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus ] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => setOnlineStatus(false));   //window : online event

        window.addEventListener("online", () => setOnlineStatus(true));
    }, []);

    //boolean value
    return onlineStatus;
};

export default useOnlineStatus;