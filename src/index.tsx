import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../tools/store";
import { MainPage } from "../Compontents/MainPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <MainPage />
    </StrictMode>
  </Provider>,
  rootElement
);
