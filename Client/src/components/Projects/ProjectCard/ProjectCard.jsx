import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ProjectCard.css'; 

export const ProjectCard = props => {
    return (
        <a href={props.projects.repo_url}>
            <Card outline color="primary">
                <CardBody style={style}>
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                    <CardText className="text-dark">{props.projects.description}</CardText>
                </CardBody>
            </Card>
        </a>
    );
}

const style ={
    width:'100%',
    height:'150px'
}