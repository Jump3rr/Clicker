import "./styles.css";
import { MainPage } from "../Compontents/MainPage";
import React from "react";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

export default function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <MainPage />
    </div>
  );
}
