import React, { Component } from "react";
import { Button, Container } from 'reactstrap';

class About extends Component {
    render() {
        return (
             <Container className="aboutPage">
                <header className="aboutHeader">
                    <h1><u>About Me & Resume Download</u></h1>
                </header>
                <p>Hello curious veiwer or potential employer! My name is Nathan Hannon and I am a Computer Programming/Analysis graduate from Conestoga College. 
                    I am proficient with HTML5/CSS/JavaScript and React.js/Node.js, as well as C#, Python and Java. I am proficient with the Microsoft SQL, Oracle SQL, MySQL, and PostgreSQL databse systems.
                    I am currently teaching myself Rust and Go to broaden my skillset.</p>
                <hr/>
                <p><a href='https://github.com/NathanHannon'>My Github Profile</a></p>
                <p><a href='https://www.linkedin.com/in/nathan-hannon'>My LinkedIn Profile</a></p>
                <Button className="btnDownload" color='info' >Download Resume</Button>
             </Container>
        );
    }
}
export default About;