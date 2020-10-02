import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.project_id} className="text-dark">
            <Card outline className="projectCard">
                <CardImg className='project-card-image' src={props.projects.image_url} width='300px' height='200px' />
                <CardBody>
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                </CardBody>
            </Card>
        </Link>
    );
}