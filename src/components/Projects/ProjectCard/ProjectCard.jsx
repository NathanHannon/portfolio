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
                    {/* <div className="row">
                        <div className="col"> */}
                    <Card.Text className='cardContent text-dark'>{props.projects.description}</Card.Text>
                    {/* </div>
                        <div className="col"> */}
                    {/* <Card.Text className='cardContent text-dark'>{props.projects.technologies}</Card.Text> */}
                    {/* </div> */}
                    {/* </div> */}
                </Card.Body>
            </Card>
        </a >
    );
}