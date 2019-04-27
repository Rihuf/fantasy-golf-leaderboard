import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./css/main.css";

import App from "./containers/App";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
