import React, { Component } from "react";
import { Container } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container className="aboutPage">
                <header className="aboutHeader">
                    <h1><u>About Me</u></h1>
                </header>
                <h3><u>Interests</u></h3>
                <p>
                    I have a wide variety of interests including reading books (both fiction and non-fiction) fishing, golfing, video games, programming,
                    and just sceince and technology in general. I also try to keep up with the latest trends in the technology space, even if I won't learn them directly.
                    I feel it is good to have a sense of development in the industry and those that affect it and which we affect in return.
                </p>
                <hr />
                <h3><u>Skills</u></h3>
                <p>
                    I am proficient with HTML5/CSS/JavaScript and React.js/Node.js, as well as C#, Python and Java. I am also proficient with various databases including
                    Microsoft SQL, Oracle SQL, MySQL, and PostgreSQL. I am currently teaching myself TypeScript, Go, Dart/Flutter, and the concept of PWAs to broaden my skillset.
                </p>
            </Container>
        );
    }
}
export default About;