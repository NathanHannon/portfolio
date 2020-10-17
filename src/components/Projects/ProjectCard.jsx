import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardHeader } from 'reactstrap';

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.project_id} className="text-dark" id="project-link">
            <Card outline className="projectCard">
                <CardHeader>
                    <CardImg className='project-card-image' src={props.projects.image_url} width='300px' height='200px' />
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                </CardHeader>
                <CardBody>
                    <p className='description'>{props.projects.description}</p>
                </CardBody>
            </Card>
        </Link>
    );
}