import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Form from './Form'
import Projects from './Projects'

class Dashboard extends Component {
  
render() {
  return (
      <div className="dashboard">
        <Navbar />
        <div class="row">

          <div class="col s3">
            <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Logout
              </button>
          </div>

          <div class="col s9">
            <Projects />
            <Form />
          </div>

        </div>
      </div>
      );
    }
  }

  export default Dashboard;