import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ProjectCard.css'; 

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.projectid} className="text-dark">
            <Card outline color="primary">
                <CardBody>
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                    {/* <CardSubtitle className="text-dark">GitHub: {props.project.url}</CardSubtitle> */}
                    <CardText className="text-dark">{props.projects.description}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
}

const style ={
    width:'100%',
    height:'200px'
}