import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addProject } from "../../actions/projects";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addProject: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const project = {
      name,
      email,
      project
    };
    this.props.addProject(project);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row">
        <form action="" className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                placeholder="Name"
                id="name"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="input-field col s12">
              <input
                className="validate"
                placeholder="Email"
                id="email"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="input-field col s12">
              <input
                className="validate"
                placeholder="Project Name"
                id="message"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              />
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit <i class="material-icons right"> send </i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    addProject
  }
)(Form);
