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
                <h3><u>Interests</u></h3>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction), fishing, golfing, video games, programming, and technology. I also try to keep up with the latest trends in the technology space, even if I won't learn them directly.
                    I believe it is good to have an idea of the direction and developments in the industry and those that affect it and which we affect in return.
                </p>
                <h3><u>Skills</u></h3>
                <p>
                    I am proficient with HTML5/CSS/JavaScript and React.js/Node.js, as well as C#, Python and Java. I am also proficient with various databases including
                    Microsoft SQL, Oracle SQL, MySQL, and PostgreSQL. I am currently teaching myself TypeScript and the concept of Progressive Web Apps; to broaden my skillset.
                </p>
                {/* <img src={programming} alt={programming} className='programming-image' /> */}
                <p>
                    <a href='https://github.com/NathanHannon' className='githubLink' target='_blank' rel='noreferrer noopener' title='GitHub Profile'><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
                    <a href='https://www.linkedin.com/in/nathan-hannon' className='linkedinLink' target='_blank' rel='noreferrer noopener' title='LinkedIn Profile'><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></a>
                    <a href='https://dev.to/nathanhannon' className='devLink' target='_blank' rel='noreferrer noopener' title='Dev.to Profile'><FontAwesomeIcon icon={['fab', 'dev']} size='2x' /></a>
                </p>
            </div>
        );
    }
}
export default About;