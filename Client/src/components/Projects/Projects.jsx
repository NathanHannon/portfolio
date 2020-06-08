import React, { Component } from "react";
import { ProjectList } from "./ProjectList";

class Projects extends Component {

    constructor() {
        super();
        this.state = {
          projects: [],
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
          <div className="project-method">
            <ProjectList project={this.state.projects} />
          </div>
        );
      }
    };
    export default Projects
