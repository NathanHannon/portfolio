import React, { Component } from 'react';
import { ProjectList } from './ProjectList/ProjectList';

class Projects extends Component {

  // Set state
  state = {
    projectArray: []
  };

  /**
   * fetches the data from the projects API query and puts it in the projects array by changing the state
   */
  fetchProjectData() {
    let top_url = 'https://nathanhannon.dev';
    // https://portfolio-2-bggv2.ondigitalocean.app  //Alt URL
    const api_url = `${top_url}/api/projects`;
    fetch(api_url)
      .then(res => res.json())
      .then(data => this.setState({ projectArray: data }));
  }
  /**
   * pull data from the backend (database) after the component mounts
   */
  componentDidMount() {
    this.fetchProjectData();
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
