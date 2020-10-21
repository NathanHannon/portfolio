import React, { Component } from 'react';
import { ProjectList } from './ProjectList/ProjectList';

class Projects extends Component {

  // Set state
  state = {
    projects: []
  };

  callAPI() {
    const top_level = 'https://portfolio-2-bggv2.ondigitalocean.app/';
    const api_url = `${top_level}/api/projects`;
    fetch(api_url)
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
      <div className='projects-method'>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
};
export default Projects
