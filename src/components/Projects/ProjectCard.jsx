import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.project_id} className="text-dark">
            <Card outline color="primary" >
                <CardImg className='project-card' src={props.projects.image_url} width='320px' height='200px'/>
                <CardBody>  
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                    <CardText className="text-dark">{props.projects.description}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
}