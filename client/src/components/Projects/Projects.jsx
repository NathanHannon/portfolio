// src/Projects/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList/ProjectList';
import { environment } from '../../environments/environment';
import './Projects.scss';

const Projects = () => {
  const [projectArray, setProjectArray] = useState([]);

  const fetchProjectData = () => {
    const api_url = `${environment.api}/api`;
    fetch(`${api_url}/projects`)
      .then((res) => res.json())
      .then((data) => setProjectArray(data))
      .catch((error) => console.error('Error fetching projects:', error));
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <div className="projectPage">
      <Helmet>
        <title>Nathan Hannon | Projects</title>
      </Helmet>

      <section className="projects-hero">
        <motion.div
          className="projects-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-label mono">Portfolio</span>
          <h1 className="projects-title">Selected Work</h1>
          <p className="projects-subtitle">
            A curated collection of projects I've built — spanning full-stack web apps,
            APIs, and developer tools.
          </p>
        </motion.div>
      </section>

      <section className="projects-grid-section">
        <ProjectList projectArray={projectArray} />
      </section>
    </div>
  );
};

export default Projects;