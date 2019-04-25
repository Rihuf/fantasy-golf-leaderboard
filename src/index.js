import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./css/main.css";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
