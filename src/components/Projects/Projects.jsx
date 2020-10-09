import React, { Component } from "react";
import { ProjectList } from "./ProjectList/ProjectList";

class Projects extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      loading: true
    };
  }
  callAPI() {
    const api_url = "https://portfolio-qlw59.ondigitalocean.app/api/projects";
    fetch(api_url)
      .then(res => res.json())
      .then(data => this.setState({ projects: data }));
  }
  loader() {
    const el = document.querySelector(".loader-container");
    if (el) {
      el.remove();
      this.setState({ loading: false });
    }
  }
  //pull data from the backend (database)
  componentDidMount() {
    this.loader();
    this.callAPI();
  }
  render() {
    console.log(this.state.projects)
    if (this.state.loading) {
      return null;
    }
    return (
      <div className="projects-method">
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
};
export default Projects
