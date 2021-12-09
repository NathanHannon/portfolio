import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css';

export const ProjectCard = props => {
    return (
        <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title={props.projects.name + ' GitHub Page'}>
            <Card outline card className='projectCard'>
                <Card.Img className='projectCardImage' variant='top' src={props.projects.image_url} width='300px' height='200px' />
                <Card.Body>
                    <Card.Title className='cardTitle text-dark'>{props.projects.name}</Card.Title>
                    <Card.Text className='cardContent text-dark'>{props.projects.description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}