// src/Projects/ProjectCard/ProjectCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.scss';

export const ProjectCard = ({ projects }) => {
    return (
        <a
            href={projects.repo_url}
            target="_blank"
            rel="noreferrer noopener"
            title={`${projects.name} GitHub Page`}
            className="project-card-link"
            aria-label={`View ${projects.name} on GitHub`}
        >
            <Card className="projectCard">
                <Card.Img
                    className="projectCardImage"
                    variant="top"
                    src={projects.image_url}
                    width="300px"
                    height="200px"
                    alt={`Screenshot of ${projects.name} project`}
                />
                <Card.Body>
                    <Card.Title className="cardTitle text-dark">{projects.name}</Card.Title>
                    <Card.Text className="cardContent text-dark">{projects.description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};