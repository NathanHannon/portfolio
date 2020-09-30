import React, { Component } from "react";
import { Button, Container } from 'reactstrap';

class ProjectDetails extends Component {
    constructor() {
        super();
        this.state = {
            projectDetails: []
        }
    }
    callAPI() {
        let project_id = this.props.location.pathname.split('/').pop();
        fetch("https://portfolio-qlw59.ondigitalocean.app/api/projects/" + project_id)
            // loclahost:5000
            .then(res => res.json())
            .then(data => this.setState({ projectDetails: data[0] }))
    }
    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
            <Container className="projectDetails">
                <div className="projectDetails">
                    <header className="projectName">
                        <h1><u>{this.state.projectDetails.name} Details</u></h1>
                    </header>
                    <img src={this.state.projectDetails.image_url} width='50%' />
                    <p className="productDescription">{this.state.projectDetails.description}</p>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="30" width="30" />
                    <a className="githubLink" href={this.state.projectDetails.repo_url} target="_blank">GitHub Repository</a>
                </div>
            </Container>
        )
    }
};
export default ProjectDetails;
