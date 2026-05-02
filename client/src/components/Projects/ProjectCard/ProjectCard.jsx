// src/Projects/ProjectCard/ProjectCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectCard.scss';

const GRADIENTS = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
    'linear-gradient(135deg, #c9a87c 0%, #e8c9a0 100%)',
];

function pickGradient(name = '') {
    const sum = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return GRADIENTS[sum % GRADIENTS.length];
}

export const ProjectCard = ({ projects }) => {
    const gradient = pickGradient(projects.name);

    return (
        <article className="projectCard">
            <div className="projectCard-image-wrapper">
                {projects.image_url ? (
                    <img
                        className="projectCardImage"
                        src={projects.image_url}
                        width="400"
                        height="240"
                        alt={`Screenshot of ${projects.name} project`}
                        loading="lazy"
                    />
                ) : (
                    <div
                        className="projectCard-gradient"
                        style={{ background: gradient }}
                        aria-hidden="true"
                    />
                )}
            </div>
            <div className="projectCard-body">
                <h3 className="cardTitle">{projects.name}</h3>
                <p className="cardContent">{projects.description}</p>
                {(projects.repo_url || projects.demo_url) && (
                    <div className="projectCard-actions">
                        {projects.repo_url && (
                            <a
                                href={projects.repo_url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="projectCard-btn projectCard-btn--github"
                                aria-label={`View ${projects.name} on GitHub`}
                            >
                                <FontAwesomeIcon icon={['fab', 'github']} />
                                GitHub
                            </a>
                        )}
                        {projects.demo_url && (
                            <a
                                href={projects.demo_url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="projectCard-btn projectCard-btn--demo"
                                aria-label={`View live demo of ${projects.name}`}
                            >
                                <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} />
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};