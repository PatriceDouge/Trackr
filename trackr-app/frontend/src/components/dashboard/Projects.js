import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProjects } from "../../actions/projects";

export class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div>
        <h1> Project List </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
