// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './ProjectCard.css';

export const ProjectCard = props => {
    return (
        <body>
            <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title='GitHub Repository'>
                <Card outline id='projectCard'>
                    <CardImg className='projectCardImage' src={props.projects.image_url} width='300px' height='200px' />
                    <CardBody>
                        <body>
                            <CardTitle id='cardTitle'>{props.projects.name}</CardTitle>
                            <CardText className='text-dark'>{props.projects.description}
                                {/* <a className='githubLink' href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title='GitHub Repository'><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a> */}
                            </CardText>
                        </body>
                    </CardBody>
                </Card>
            </a>
        </body>
        // {'/details/' + props.projects.project_id} className='text-dark' id='project-link'
    );
}