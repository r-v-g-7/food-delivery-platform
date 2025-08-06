import { useState, useEffect } from "react";

const useUserOnlineStatus = () => {
  const [userStatus, setUserStatus] = useState(
    navigator.onLine ? "online" : "offline"
  );

  useEffect(() => {
    const handleOnlineStatus = () => setUserStatus("online");
    const handleOfflineStatus = () => setUserStatus("offline");

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return userStatus;
};

export default useUserOnlineStatus;
