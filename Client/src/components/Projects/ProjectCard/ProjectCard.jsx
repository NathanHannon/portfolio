import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import './ProjectCard.css'; 

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.project_id} className="text-dark">
            <Card outline color="primary">
                <CardImg className="text-dark" style={style} src={props.projects.image_url}/>
                    <CardBody>  
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                    <CardText className="text-dark">{props.projects.description}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
}

const style ={
    width:'100%',
    height:'150px'
}