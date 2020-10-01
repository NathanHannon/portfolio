import React, { Component } from "react";
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'

class Home extends Component {

  render() {
    return (
      <Container className="homePage">
        <header className="homeHeader">
          <h1><u>Welcome!</u></h1>
        </header>
        <p>Hello curious viewer or potential employer! My name is Nathan Hannon and I am a Computer Programming/Analysis graduate from Conestoga College.</p>
        <hr />
        <p>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <a href='https://github.com/NathanHannon' className="socialLink"> Github Profile</a>
        </p>
        <p>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
          <a href='https://www.linkedin.com/in/nathan-hannon' className="socialLink"> LinkedIn Profile</a>
        </p>
        <p>
          <FontAwesomeIcon icon={['fab', 'dev']} size='2x' />
          <a href="https://dev.to/nathanhannon" className="socialLink"> Dev.to Profile</a>
        </p>
      </Container>
    );
  }
}
export default Home