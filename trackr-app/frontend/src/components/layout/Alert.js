import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withAlert } from "react-alert";

export class Alerts extends Component {
  render() {
    return <Router />;
  }
}

export default withAlert(Alerts);
