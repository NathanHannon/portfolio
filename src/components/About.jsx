import React, { Component } from 'react';
import programming from '../assets/programming.svg';

class About extends Component {
    render() {
        return (
            <div className='aboutPage'>
                <header className='aboutHeader'>
                    <h1><u>About Me</u></h1>
                </header>
                <h3><u>Interests</u></h3>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction), fishing, golfing, video games, programming,
                    and sceince and technology in general. I also try to keep up with the latest trends in the technology space, even if I won't learn them directly.
                    I believe it is good to have an idea of the direction and developments in the industry and those that affect it and which we affect in return.
                </p>
                <h3><u>Skills</u></h3>
                <p>
                    I am proficient with HTML5/CSS/JavaScript and React.js/Node.js, as well as C#, Python and Java. I am also proficient with various databases including
                    Microsoft SQL, Oracle SQL, MySQL, and PostgreSQL. I am currently teaching myself TypeScript, Rust, Dart/Flutter, and the concept of PWAs; to broaden my skillset.
                </p>
                <img src={programming} alt={programming} className='programming-image' />
            </div>
        );
    }
}
export default About;