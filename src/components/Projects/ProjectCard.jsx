import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

let { projectId } = useParams()
export const ProjectCard = props => {
    return (
        <Link to={"/Details/:projectId"} className="text-dark">
            <Card outline color="primary">
                <CardImg className='project-card' src={props.projects.image_url} width='320px' height='200px' />
                <CardBody>
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                    {/* <CardText className="text-dark">{props.projects.description}</CardText> */}
                </CardBody>
            </Card>
        </Link>
    );
}