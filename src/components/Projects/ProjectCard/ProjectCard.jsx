import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectCard.css';

export const ProjectCard = props => {
    return (
        // <Link to={'/Details/' + props.projects.project_id} className='text-dark' id='project-link'>
        <Card outline className='projectCard'>
            <CardImg className='projectCardImage' src={props.projects.image_url} width='300px' height='200px' />
            <CardBody>
                <CardTitle className='text-dark' id='cardTitle'>{props.projects.name}</CardTitle>
                <CardText className='text-dark'>{props.projects.description}</CardText>
                <a className='githubLink' href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title='GitHub Repository'><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
            </CardBody>
        </Card>
        // </Link>
    );
}