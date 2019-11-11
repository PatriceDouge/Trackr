import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                backgroundColor: "#09192F",
                width: "100%",
              }}
              className="col s5 brand-logo center white-text" >
              TRACKR
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
