import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import './About.css'

class About extends Component {
    render() {
        return (
             <Container className="aboutPage">
                <header className="aboutHeader">
                    <h1><u>About Me</u></h1>
                </header>
                <h2><u>Interests</u></h2>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction) fishing, golfing, video games, programming, 
                    and just sceince and technology in general. I also try to keep up with the latest trends in the technology space, even if I won't learn them directly. 
                    I feel it is good to have a sense of development in the industry and those that affect it and which we affect in return.
                </p>
                <p>
                   <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" height='30' width='30'/>
                    <a href='https://www.linkedin.com/in/nathan-hannon' className="socialLink">LinkedIn Profile</a>
                </p> 
                <p>
                    <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Nathan Hannon's DEV Profile" height="30" width="30"/>    
                    <a href="https://dev.to/nathanhannon" className="socialLink">Dev.to Profile</a>
                </p>
             </Container>
        );
    }
}
export default About;