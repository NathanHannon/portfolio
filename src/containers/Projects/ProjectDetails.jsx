import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Container } from 'reactstrap';

class ProjectDetails extends Component {

    // Set State
    state = {
        projectDetails: []
    }

    callAPI() {
        let project_id = this.props.location.pathname.split('/').pop();
        let top_url = 'https://nathanhannon.dev';
        if (window.location.href == 'https://portfolio-2-bggv2.ondigitalocean.app') {
            top_url = 'https://portfolio-2-bggv2.ondigitalocean.app';
        }
        if (window.location.href == 'https://www.nathanhannon.dev') {
            top_url = 'https://www.nathanhannon.dev';
        }
        // https://portfolio-2-bggv2.ondigitalocean.app  //Alt URL
        const project_url = `${top_url}/api/projects/${project_id}`;
        fetch(project_url)
            .then(res => res.json())
            .then(data => this.setState({ projectDetails: data[0] }))
    }
    componentDidMount() {
        this.callAPI();
        console.log(this.state.projectDetails);
    }
    render() {
        return (
            <Container className='projectDetails'>
                <header className='projectName'>
                    <h1><u>{this.state.projectDetails.name} Details</u></h1>
                </header>
                <img src={this.state.projectDetails.image_url} width='50%' alt='' />
                <p className='productDescription'>{this.state.projectDetails.description}</p>
                <a className='githubLink' href={this.state.projectDetails.repo_url} target='_blank' rel='noreferrer noopener' title='GitHub Repository'><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
            </Container>
        )
    }
};
export default ProjectDetails;
