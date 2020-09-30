import React, { Component } from "react";
import { Container } from 'reactstrap';
import './Home.css'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className="homePage">
        <header className="homeHeader">
          <h1><u>Welcome!</u></h1>
        </header>
        <p>Hello curious viewer or potential employer! My name is Nathan Hannon and I am a Computer Programming/Analysis graduate from Conestoga College.</p>
        <hr />
        <p>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="30" width="30" />
          <a href='https://github.com/NathanHannon' className="socialLink">Github Profile</a>
        </p>
        <p>
          <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" height='30' width='30' />
          <a href='https://www.linkedin.com/in/nathan-hannon' className="socialLink">LinkedIn Profile</a>
        </p>
        <p>
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Nathan Hannon's DEV Profile" height="30" width="30" />
          <a href="https://dev.to/nathanhannon" className="socialLink">Dev.to Profile</a>
        </p>
      </Container>
    );
  }
}
export default Home