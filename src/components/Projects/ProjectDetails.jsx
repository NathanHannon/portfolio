import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectDetails extends Component {

    // Set State
    state = {
        projectDetails: []
    }

    callAPI() {
        let project_id = this.props.location.pathname.split('/').pop();
        const project_url = `https://portfolio-qlw59.ondigitalocean.app/api/projects/${project_id}`;
        fetch(project_url)
            // loclahost:5000
            .then(res => res.json())
            .then(data => this.setState({ projectDetails: data[0] }))
    }
    componentDidMount() {
        this.callAPI();
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
