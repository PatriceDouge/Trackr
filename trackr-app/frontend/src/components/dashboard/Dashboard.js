import React, { Component } from "react";
import Form from "./Form";
import Projects from "./Projects";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s3">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          <div className="col s9">
            <Projects />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
