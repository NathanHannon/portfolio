import React, { Component } from "react";
import { Button, Container } from 'reactstrap';

class ProjectDetails extends Component {
    constructor() {
        super();
        this.state = {
            projectDetails: []
        }
    }
    componentDidMount() {
        let projectId = this.props.location.pathname.split('/').pop();
        fetch("http://localhost:8080/projects/" + projectId)
        .then(res => res.json())
        .then(data => this.setState({ projectDetails: data[0] }))
    }
    render() {
        return (
            <Container className="projectDetails">
                <header className="projectName">
                    <h1><u>{this.state.projectDetails.name} Details</u></h1>
                </header>
                <p className="productDescription">{this.state.projectDetails.description}</p>
                <a className="githubLink" href={this.state.projectDetails.url}>GitHub Repository</a>
            </Container>
        )
    }
};
export default ProjectDetails;
