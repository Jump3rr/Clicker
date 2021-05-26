import React from "react";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

export const Notification = () => {
  const showNotification = () => {
    NotificationManager.success("You've earned a new achievement!", "", 5000);
  };

  return <div>{showNotification()}</div>;
};
