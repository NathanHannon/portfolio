// src/Projects/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProjectList from './ProjectList/ProjectList';
import { environment } from '../../environments/environment.prod';
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

  const pageTitle = 'My Projects';

  return (
    <div className="projectPage">
      <Helmet>
        <title>Nathan Hannon | {pageTitle}</title>
      </Helmet>
      <header className="projectHeader">
        <h1>{pageTitle}</h1>
      </header>
      <div className="projects-method">
        <ProjectList projectArray={projectArray} />
      </div>
    </div>
  );
};

export default Projects;