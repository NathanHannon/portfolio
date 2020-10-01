import React, { Component } from "react";
import { ProjectList } from "./ProjectList";

class Projects extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  callAPI() {
    fetch("https://portfolio-qlw59.ondigitalocean.app/api/projects")
      .then(res => res.json())
      .then(data => this.setState({ projects: data }));
  }
  //pull data from the backend (database)
  componentDidMount() {
    this.callAPI();
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
