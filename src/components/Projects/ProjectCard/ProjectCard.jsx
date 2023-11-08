import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.scss';

export const ProjectCard = (props) => {
    return (
        // This is the link to the GitHub page for the project
        // Project details are mapped from the project array
        // <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title={props.projects.name + ' GitHub Page'}>
        <Card outline className='projectCard'>
            <Card.Img className='projectCardImage' variant='top' src={props.projects.image_url} width='300px' height='200px' />
            <Card.Body>
                <Card.Title className='cardTitle text-dark'>{props.projects.name}</Card.Title>
                <Card.Text className='cardContent text-dark'>{props.projects.description}</Card.Text>
                {/* TODO: Separate buttons for GitHub and live? */}
                <Button href={props.projects.repo_url} className='github-url-button'>GitHub</Button>
                {/* only show the demo button if the project has a demo_url */}
                {props.projects.demo_url && <Button href={props.projects.demo_url} className='demo-url-button'>Demo</Button>}
            </Card.Body>
        </Card>
        // </a >
    );
}