// src/About/About.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import programming from '../../assets/SVGs/programming.svg';
import html5 from '../../assets/tech-logos/html.svg';
import css3 from '../../assets/tech-logos/css.svg';
import javascript from '../../assets/tech-logos/javascript.svg';
import linux from '../../assets/tech-logos/linux.svg';
import typescript from '../../assets/tech-logos/typescript.svg';
import angular from '../../assets/tech-logos/angular.svg';
import react from '../../assets/tech-logos/react.svg';
import nodejs from '../../assets/tech-logos/nodejs.svg';
import csharp from '../../assets/tech-logos/csharp.svg';
import go from '../../assets/tech-logos/go.svg';
import java from '../../assets/tech-logos/java.svg';
import mongodb from '../../assets/tech-logos/mongodb.svg';
import postgresql from '../../assets/tech-logos/postgresql.svg';
import mssql from '../../assets/tech-logos/microsoft-sql-server.svg';
import python from '../../assets/tech-logos/python.svg';
import './About.scss';

// Define skills array for easier mapping
const skills = [
    { name: 'HTML5', icon: html5 },
    { name: 'CSS3', icon: css3 },
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'Node.js', icon: nodejs },
    { name: 'React', icon: react },
    { name: 'Angular', icon: angular },
    { name: 'C#', icon: csharp },
    { name: 'Go', icon: go },
    { name: 'Java', icon: java },
    { name: 'Linux', icon: linux },
    { name: 'MongoDB', icon: mongodb },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'SQL Server', icon: mssql },
    { name: 'Python', icon: python }
];

// Animation variants for Framer Motion
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    }),
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
};

const About = () => {
    return (
        <div className="aboutPage">
            <Helmet>
                <title>Nathan Hannon | Software Developer</title>
            </Helmet>

            {/* ══ HERO SECTION ══ */}
            <section className="hero-section">
                <div className="hero-inner">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <span className="hero-label mono">Software Developer</span>
                        <h1 className="hero-title">
                            <TypeAnimation
                                cursor={true}
                                sequence={["Hi, I'm Nathan.", 1000]}
                                wrapper="span"
                                repeat={false}
                                speed={50}
                            />
                        </h1>
                        <p className="hero-description">
                            I build thoughtful, scalable software that blends clean architecture
                            with intuitive user experience. Passionate about leveraging technology
                            to create solutions that make a meaningful impact.
                        </p>
                        <div className="hero-actions">
                            <a href="/projects" className="btn btn-primary hero-btn">
                                View Projects
                            </a>
                            <a href="/contact" className="btn-ghost hero-btn">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="hero-image-wrapper">
                            <img src={programming} alt="Developer illustration" className="hero-illustration" />
                            <div className="hero-glow" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ ABOUT SECTION ══ */}
            <section className="about-section">
                <div className="about-inner">
                    <motion.div
                        className="about-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                    >
                        <span className="section-label mono">About</span>
                        <h2 className="section-heading">Full-Stack Developer</h2>
                        <p>
                            With years of experience across the stack, I handle front-end interfaces,
                            back-end services, and database architecture with equal confidence.
                            I adapt quickly to new languages and paradigms, and I thrive in
                            collaborative environments where creative problem-solving drives results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══ SKILLS SECTION ══ */}
            <section className="skills-section">
                <div className="skills-inner">
                    <motion.div
                        className="skills-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                    >
                        <span className="section-label mono">Toolkit</span>
                        <h2 className="section-heading">Technologies I Work With</h2>
                    </motion.div>
                    <motion.div
                        className="skills-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card"
                                custom={index}
                                variants={fadeUp}
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="skill-icon"
                                    width="48"
                                    height="48"
                                />
                                <span className="skill-name">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;