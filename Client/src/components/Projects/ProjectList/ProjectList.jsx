import React from "react";
import { ProjectCard } from '../ProjectCard';
import { Container } from "reactstrap";
import './ProjectList.css'

//Creates the project list using the card component
export const ProjectList = props => (
<div>
    <Container className="project-list">
        {props.projects.map((projects) => <ProjectCard key={projects.project_id} projects={projects} />)}
    </Container> 
</div>
);
