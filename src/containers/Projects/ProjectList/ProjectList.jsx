import React from 'react';
import { Container } from 'reactstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './ProjectList.css';

//Creates the project list using the card component
export const ProjectList = props => (
    <Container className='projectList' >
        {props.projects.map((projects) => (
            <ProjectCard key={projects.project_id} projects={projects} />
        ))}
    </Container>
);
