import React, { Component } from 'react';
import { ProjectList } from './ProjectList/ProjectList';

class Projects extends Component {

  // Set state
  state = {
    projectArray: []
  };

  callAPI() {
    let top_url = 'https://nathanhannon.dev';
    if (window.location.href == 'https://portfolio-2-bggv2.ondigitalocean.app') {
      top_url = 'https://portfolio-2-bggv2.ondigitalocean.app';
    }
    if (window.location.href == 'https://www.nathanhannon.dev') {
      top_url = 'https://www.nathanhannon.dev';
    }
    // https://portfolio-2-bggv2.ondigitalocean.app  //Alt URL
    let api_url = `${top_url}/api/projects`;
    fetch(api_url)
      .then(res => res.json())
      .then(data => this.setState({ projectArray: data }));
  }
  //pull data from the backend (database) after the component mounts
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='projects-method'>
        <ProjectList projectArray={this.state.projectArray} />
      </div>
    );
  }
};
export default Projects
