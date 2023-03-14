import React from 'react';
import { Container } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import './ProjectList.scss';

/**
 * This function maps the generated project cards to the project array, using the project ID as the key
 */
const ProjectList = (props) => (
    <Container className='projectList'>
        {
            props.projectArray.map((projects) => (
                // have each card fade in from the bottom
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProjectCard key={projects.project_id} projects={projects} />
                </motion.div>
            ))
        }
    </Container>
);

export default ProjectList;
