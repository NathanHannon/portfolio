import React, { Component } from "react";
import { ProjectList } from "./ProjectList/ProjectList";

class Projects extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  //pull data from the backend (database)
  componentDidMount() {

    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(data => this.setState({ projects: data }));
  }
  render() {
    console.log(this.state.projects)
    return (
      <div className="projects-method">
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
};
export default Projects
