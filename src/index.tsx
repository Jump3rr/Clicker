import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "../Compontents/NavBar/TopBar";
import { HomePage } from "../Compontents/HomePage/HomePage";
import { Achievements } from "../Compontents/Achievements/Achievements";
import { Shop } from "../Compontents/Shop/Shop";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "../tools/store";
import { MainPage } from "../Compontents/MainPage";

// const store = createStore(counterReducer);
//////provider to reducers/index.ts
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <MainPage />
    </StrictMode>
  </Provider>,
  rootElement
);
