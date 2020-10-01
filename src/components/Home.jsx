import React, { Component } from "react";
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <a href='https://github.com/NathanHannon' className="githubLink" title="GitHub Profile"><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
          <a href='https://www.linkedin.com/in/nathan-hannon' className="linkedinLink" title="LinkedIn Profile"><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></a>
          <a href="https://dev.to/nathanhannon" className="devLink" title="Dev.to Profile"><FontAwesomeIcon icon={['fab', 'dev']} size='2x' /></a>
        </p>
      </Container>
    );
  }
}
export default Home