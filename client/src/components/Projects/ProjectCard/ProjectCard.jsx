// src/Projects/ProjectCard/ProjectCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <article className="projectCard">
                <div className="projectCard-image-wrapper">
                    <img
                        className="projectCardImage"
                        src={projects.image_url}
                        width="400"
                        height="240"
                        alt={`Screenshot of ${projects.name} project`}
                        loading="lazy"
                    />
                    <div className="projectCard-overlay">
                        <span className="projectCard-view">
                            <FontAwesomeIcon icon={['fab', 'github']} /> View on GitHub
                        </span>
                    </div>
                </div>
                <div className="projectCard-body">
                    <h3 className="cardTitle">{projects.name}</h3>
                    <p className="cardContent">{projects.description}</p>
                </div>
            </article>
        </a>
    );
};