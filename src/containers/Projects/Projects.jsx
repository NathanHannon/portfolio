import React, { Component } from 'react';
import { ProjectList } from './ProjectList/ProjectList';

class Projects extends Component {

  // Set state
  state = {
    projectArray: []
  };

  callAPI() {
    const api_url = 'https://portfolio-2-bggv2.ondigitalocean.app/api/projects';
    fetch(api_url)
      .then(res => res.json())
      .then(data => this.setState({ projectArray: data }));
  }
  //pull data from the backend (database)
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
