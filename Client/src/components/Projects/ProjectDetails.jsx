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
        let project_id = this.props.location.pathname.split('/').pop();
        fetch("http://localhost:8080/projects/" + project_id)
        .then(res => res.json())
        .then(data => this.setState({ projectDetails: data[0] }))
    }
    render() {
        return (
            <Container className="projectDetails">
                <header className="projectName">
                    <h1><u>{this.state.projectDetails.name} Details</u></h1>
                </header>
                <img src={this.state.projectDetails.image_url} width='50%'/>
                <p className="productDescription">{this.state.projectDetails.description}</p>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="30" width="30"/>
                <a className="githubLink" href={this.state.projectDetails.repo_url}>GitHub Repository</a>
            </Container>
        )
    }
};
export default ProjectDetails;
