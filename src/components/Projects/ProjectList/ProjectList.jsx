import React from 'react';
import { Container } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './ProjectList.css';

/**
 * This function maps the generated project cards to the project array, using the project ID as the key
 */
const ProjectList = props => (
    <Container className='projectList'>
        {
            props.projectArray.map((projects) => (
                <ProjectCard key={projects.project_id} projects={projects} />
            ))
        }
    </Container>
);

export default ProjectList;
