import React from "react";
import { ProjectCard } from '../ProjectCard';
import "react-simple-flex-grid";
import './ProjectList.css';
import "react-simple-flex-grid";

//Creates the project list using the card component
export const ProjectList = props => (
    <Row gutter={40}>
        {props.projects.map((projects) => <Col xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 1 }}>
            <ProjectCard key={projects.project_id} projects={projects} />
        </Col>)}
    </Row>
);
