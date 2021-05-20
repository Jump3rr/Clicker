import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "../Compontents/NavBar/TopBar";
import { Cookie } from "../Compontents/cookie";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TopBar />
    <Cookie />
    <App />
  </StrictMode>,
  rootElement
);
