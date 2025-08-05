import { useState, useEffect } from "react"

const useUserOnlineStatus = () => {
    const[userStatus, setUserStatus] = useState("online")
    
    useEffect(() => {
        window.addEventListener("online", () => setUserStatus("online")) 
        window.addEventListener("offline", () => setUserStatus("offline"))

        return () => {
      window.removeEventListener("online", setUserStatus("online"));
      window.removeEventListener("offline", setUserStatus("offline"));
    };
    }, [])

    return userStatus
 }

 export default useUserOnlineStatus 