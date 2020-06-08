import React from "react";
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Container } from "reactstrap";
import './ProjectList.css'

//Creates the project list using the card component
export const ProjectList = props => (
<div>
    <Container className="projects-list">
        {props.projects.map((projects) => <ProjectCard key={projects.projectid} projects={projects} />)}
    </Container> 
</div>
);
