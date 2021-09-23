// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './ProjectCard.css';

export const ProjectCard = props => {
    return (
        <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title={props.projects.name + ' GitHub Page'}>
            <Card outline className='projectCard'>
                <CardImg className='projectCardImage' src={props.projects.image_url} width='300px' height='200px' />
                <CardBody>
                    <CardTitle className='text-dark' id='cardTitle'>{props.projects.name}</CardTitle>
                    <CardText className='text-dark'>{props.projects.description}</CardText>
                </CardBody>
            </Card>
        </a>
        // {'/details/' + props.projects.project_id} className='text-dark' id='project-link'
    );
}