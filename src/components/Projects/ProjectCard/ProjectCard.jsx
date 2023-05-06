import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.scss';

export const ProjectCard = (props) => {
    return (
        // This is the link to the GitHub page for the project
        // Project details are mapped from the project array
        <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title={props.projects.name + ' GitHub Page'}>
            <Card outline className='projectCard'>
                <Card.Img className='projectCardImage' variant='top' src={props.projects.image_url} width='300px' height='200px' />
                <Card.Body>
                    <Card.Title className='cardTitle text-dark'>{props.projects.name}</Card.Title>
                    <Card.Text className='cardContent text-dark'>{props.projects.description}</Card.Text>
                    {/* TODO: Separate buttons for GitHub and live? */}
                </Card.Body>
            </Card>
        </a >
    );
}