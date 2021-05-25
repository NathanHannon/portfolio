import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import programming from '../assets/programming.svg';

class About extends Component {
    render() {
        return (
            <div className='aboutPage'>
                <header className='aboutHeader'>
                    <h1>About Me</h1>
                </header>
                <p><b>My name is Nathan Hannon and I am a Computer Programming/Analysis graduate from Conestoga College.</b></p>
                <h3>Interests</h3>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction), fishing, golfing, video games, programming, and technology. I also try to keep up with the latest trends in the technology space, even if I don't end up learning them directly.
                    I believe it is good to have an idea of the direction and developments in the industry and those that affect it and which we affect in return.
                </p>
                <h3>Skills</h3>
                <p>
                    I am proficient with the standard web stack (HTML/CSS/JavaScript), React.js/Node.js, TypeScript, as well as C#, Python, and Go. I am also proficient with various databases including
                    Microsoft SQL, MySQL, and PostgreSQL.
                </p>
                {/* <img src={programming} alt={programming} className='programming-image' /> */}
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