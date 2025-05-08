// src/About/About.js
import React from 'react';
import { Card } from 'react-bootstrap';
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
    { name: 'Python', icon: 'python'}
];

// Animation variants for Framer Motion
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const About = () => {
    const pageTitle = 'About Me';

    return (
        <div className="aboutPage">
            <Helmet>
                <title>Nathan Hannon | {pageTitle}</title>
            </Helmet>

            <header className="aboutHeader">
                <h1>{pageTitle}</h1>
            </header>

            <motion.div
                className="row about-me"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="col-sm">
                    <TypeAnimation
                        cursor={true}
                        sequence={["Hi, I'm Nathan.", 1000]}
                        wrapper="h4"
                        repeat={false}
                        speed={50}
                    />
                    <h5>Who am I?</h5>
                    <p>
                        As a software developer, I am passionate about leveraging technology to create innovative solutions that
                        make a meaningful impact on people's lives. With years of experience in the industry, I have honed my skills
                        in a variety of programming languages and tools, allowing me to tackle complex challenges and deliver
                        high-quality results.
                    </p>
                </div>
                <div className="col-sm">
                    <motion.svg
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <image href={programming} width="100%" height="100%" />
                    </motion.svg>
                </div>
            </motion.div>

            <hr />

            <motion.div
                className="row what-do"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="col-sm order-sm-last description">
                    <TypeAnimation
                        cursor={true}
                        sequence={["I'm a full-stack web developer.", 1000]}
                        wrapper="h4"
                        repeat={false}
                        speed={50}
                    />
                    <h5>What can I do?</h5>
                    <p>
                        I am confident in my abilities to handle front and back end development, as well as the design and
                        implementation of databases. I am able to adapt to new languages and paradigms, allowing me to quickly learn
                        and apply new skills to my work. I am also a strong communicator, and I enjoy working with others to solve
                        problems and create solutions.
                    </p>
                    <a href="/projects" type="button" className="btn btn-primary project-button">
                        View My Projects
                    </a>
                </div>
                <div className="col-sm">
                    <div className="tech-grid">
                        {skills.map((skill, index) => (
                            <motion.li
                                key={skill.name}
                                className="grid-item"
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Card className="techCard">
                                    <Card.Img
                                        className="projectCardImage"
                                        variant="top"
                                        src={skill.icon}
                                        width="60px"
                                        height="60px"
                                    />
                                    <Card.Body>
                                        <Card.Text className="cardContent">{skill.name}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.li>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
