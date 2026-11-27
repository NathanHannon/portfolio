// src/Projects/Projects.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList/ProjectList';
import { environment } from '../../environments/environment';
import './Projects.scss';

const Projects = () => {
  const [projectArray, setProjectArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjectData = useCallback((signal) => {
    setLoading(true);
    setError(null);

    const apiUrl = `${environment.api}/api/projects`;
    fetch(apiUrl, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load projects (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Unexpected response format');
        }
        setProjectArray(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('Error fetching projects:', err);
        setError('Unable to load projects right now. Please try again.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchProjectData(controller.signal);
    return () => controller.abort();
  }, [fetchProjectData]);

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
        {loading && (
          <div className="projects-status" role="status" aria-live="polite">
            <div className="projectList-grid">
              {[0, 1, 2].map((n) => (
                <div key={n} className="projectCard-skeleton" aria-hidden="true" />
              ))}
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="projects-status projects-status--error" role="alert">
            <p>{error}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => fetchProjectData()}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && projectArray.length === 0 && (
          <div className="projects-status">
            <p>No projects available yet.</p>
          </div>
        )}

        {!loading && !error && projectArray.length > 0 && (
          <ProjectList projectArray={projectArray} />
        )}
      </section>
    </div>
  );
};

export default Projects;