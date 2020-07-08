import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import './About.css'

class About extends Component {
    render() {
        return (
             <Container className="aboutPage">
                <header className="aboutHeader">
                    <h1><u>About Me & Resumé Download</u></h1>
                </header>
                <p>Hello curious veiwer or potential employer! My name is Nathan Hannon and I am a Computer Programming/Analysis graduate from Conestoga College. 
                    I am proficient with HTML5/CSS/JavaScript and React.js/Node.js, as well as C#, Python and Java. I am proficient with the Microsoft SQL, Oracle SQL, MySQL, and PostgreSQL databse systems.
                    I am currently teaching myself Rust and Go to broaden my skillset.</p>
                <hr/>
                <p>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="30" width="30"/>
                    <a href='https://github.com/NathanHannon' className="socialLink"> Github Profile</a>
                    <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" height='30' width='30'/>
                    <a href='https://www.linkedin.com/in/nathan-hannon' className="socialLink"> LinkedIn Profile</a>
                    <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Nathan Hannon's DEV Profile" height="30" width="30"/>    
                    <a href="https://dev.to/nathanhannon" className="socialLink"> Dev.to Profile</a>
                </p>
                <iframe width="100%" height="1150" frameborder="0" src={`https://storage.cloud.google.com/portfoliofiles/Nathan_Hannon_Resume.pdf`}/>
                {/* <Button className="btnDownload" color='info' >Download Resumé</Button> */}
             </Container>
        );
    }
}
export default About;