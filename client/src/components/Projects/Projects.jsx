import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProjectList from './ProjectList/ProjectList';
import { motion } from 'framer-motion';
import { Modal } from 'react-bootstrap';

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
