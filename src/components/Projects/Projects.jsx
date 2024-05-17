import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProjectList from './ProjectList/ProjectList';
import { environment } from '../../environments/environement.prod';
class Projects extends Component {

  // Set state
  state = {
    projectArray: []
  };

  /**
   * fetches the data from the projects API query and puts it in the projects array by changing the state
   */
  fetchProjectData() {
    const api_url = `${environment.api}/api`;
    fetch(`${api_url}/projects`)
      .then(res => res.json())
      .then(data => this.setState({ projectArray: data }));
  }
  /**
   * pull data from the backend express (database) after the component mounts
   */
  componentDidMount() {
    this.fetchProjectData();
  }

  render() {
    const pageTitle = 'My Projects';
    return (
      <div className="projectPage">
        <Helmet>
          <title>Nathan Hannon | {pageTitle}</title>
        </Helmet>
        <header className='projectHeader'>
          <h1>{pageTitle}</h1>
        </header>
        <div className='projects-method'>
          <ProjectList projectArray={this.state.projectArray} />
        </div>
      </div>
    );
  }
};
export default Projects
