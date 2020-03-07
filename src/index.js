import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import { App } from "./components/App";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
