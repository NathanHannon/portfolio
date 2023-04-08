import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// import programming from '../assets/programming.svg';

class About extends Component {
    render() {
        const pageTitle = 'About Me';
        return (
            <div className='aboutPage'>
                <Helmet>
                    <title>Nathan Hannon | {pageTitle}</title>
                </Helmet>
                <header className='aboutHeader'>
                    <h1>{pageTitle}</h1>
                </header>
                <p><b>My name is Nathan Hannon and I am a Programmer/Web Developer at Woodstock Hospital.</b></p>
                <h3>Interests</h3>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction), fishing, golfing, video games, programming, and technology. I try to keep up with the latest trends in the technology space and I believe it is good to have an idea of the direction and developments in the industry.
                </p>
                <h3>Technical Expertise</h3>
                <p>
                    I am skilled with HTML/CSS/JavaScript, TypeScript, React, and Node.js for web development; as well as C#, Java, Python, and Go for application development. I am also proficient with the various SQL implementations.
                </p>
                <p>
                    <a href='https://github.com/NathanHannon' className='githubLink' target='_blank' rel='noreferrer noopener' title='GitHub Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
                    <a href='https://www.linkedin.com/in/nathan-hannon' className='linkedinLink' target='_blank' rel='noreferrer noopener' title='LinkedIn Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></a>
                    <a href='https://dev.to/nathanhannon' className='devLink' target='_blank' rel='noreferrer noopener' title='Dev.to Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'dev']} size='2x' /></a>
                </p>
            </div>
        );
    }
}
export default About;
