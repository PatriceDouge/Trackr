import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './layout/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));