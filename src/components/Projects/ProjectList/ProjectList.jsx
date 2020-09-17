import React from "react";
import { ProjectCard } from '../ProjectCard';
import { Container } from "reactstrap";
import { BrowserView, MobileView } from "react-device-detect";
import './ProjectList.css'
import { Link } from "react-router-dom";

//Creates the project list using the card component
export const ProjectList = props => (
    <div>
        <Container className="project-list">
            <BrowserView>
                {props.projects.map((projects) => <ProjectCard key={projects.project_id} projects={projects} />)}
            </BrowserView>
            <MobileView>
                {props.projects.map((projects) => <Link to={"/Details/" + props.projects.project_id} className="text-dark" />)}
            </MobileView>
        </Container>
    </div>
);
