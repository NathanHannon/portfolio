import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { ProjectList } from './ProjectList/ProjectList';

class Projects extends Component {

  // Set state
  state = {
    projects: []
  };

  callAPI() {
    const api_url = 'https://portfolio-2-bggv2.ondigitalocean.app/api/projects';
    fetch(api_url)
      .then(res => res.json())
      .then(data => this.setState({ projects: data }));
  }
  //pull data from the backend (database)
  componentDidMount() {
    this.callAPI();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    console.log(this.state.projects)
    return (
      <div className='projects-method'>
        <ProjectList projects={this.state.projects} />
        {/* <br />
        <footer>
          <br />
          <Button className='top-button' color='success' onClick={this.scrollToTop}>Back to top</Button>
        </footer> */}
      </div>
    );
  }
};
export default Projects
