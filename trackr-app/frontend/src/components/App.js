import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Alerts from "./layout/Alerts";
import store from "../store";

//alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <div className="app">
              <Navbar /> {/* <Alerts /> */} <Dashboard />
            </div>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
