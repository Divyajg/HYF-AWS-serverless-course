import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState(null);

  const createNotification = (text) => {
setNotifications(text);
    setTimeout(() => {
      setNotifications(null);
    }, 3000);
  };

  return { notifications, createNotification };
}

export default useNotifications;
