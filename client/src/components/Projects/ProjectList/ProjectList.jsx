// src/Projects/ProjectList/ProjectList.jsx
import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectList.scss';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ProjectList = ({ projectArray }) => (
    <div className="projectList">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="projectList-grid"
        >
            <AnimatePresence>
                {projectArray.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        layout
                        className="projectList-item"
                    >
                        <ProjectCard projects={project} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    </div>
);

export default ProjectList;