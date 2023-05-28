import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import programming from '../../assets/SVGs/programming.svg';
import html5 from '../../assets/tech-logos/html.svg';
import css3 from '../../assets/tech-logos/css.svg';
import javascript from '../../assets/tech-logos/javascript.svg';
import linux from '../../assets/tech-logos/linux.svg';
import typescript from '../../assets/tech-logos/typescript.svg';
import angular from '../../assets/tech-logos/angular.svg';
import react from '../../assets/tech-logos/react.svg';
import nodejs from '../../assets/tech-logos/nodejs.svg';
import csharp from '../../assets/tech-logos/csharp.svg';
import java from '../../assets/tech-logos/java.svg';
import mongodb from '../../assets/tech-logos/mongodb.svg';
import postgresql from '../../assets/tech-logos/postgresql.svg';
import './About.scss'

class About extends Component {
    render() {
        const pageTitle = 'About Me';
        return (
            <div className='aboutPage'>
                <Helmet>
                    <title>Nathan Hannon | {pageTitle}</title>
                </Helmet>
                <header className='aboutHeader'>
                    <h1>{pageTitle}</h1>
                </header>
                <div className="row about-me">
                    <div className="col-sm">
                        <h4>Hi, I'm Nathan.</h4>
                        <h5>Who am I?</h5>
                        <p>
                            As a programmer and web developer, I am passionate about leveraging technology to create innovative solutions that make a meaningful impact on people's lives. With years of experience in the industry, I have honed my skills in a variety of programming languages and tools, allowing me to tackle complex challenges and deliver high-quality results.
                        </p>
                    </div>
                    <div className="col-sm">
                        {/* auto scaling svg */}
                        <svg width={'100%'} height={'100%'} preserveAspectRatio='none'>
                            <image href={programming} width={'100%'} height={'100%'} />
                        </svg>
                    </div>
                </div>
                <hr />
                <div className="row what-do">
                    <div className="col-sm order-sm-last description">
                        <h4>Full Stack Developer</h4>
                        <h5>What can I do?</h5>
                        <p>
                            I am confident in my abilities to handle front and back end development, as well as the design and implementation of databases. I am able to adapt to new languages and paradigms, allowing me to quickly learn and apply new skills to my work. I am also a strong communicator, and I enjoy working with others to solve problems and create solutions.
                        </p>
                        <a href='/projects' type='button' className='btn btn-primary project-button'>
                            View My Projects
                        </a>
                    </div>
                    <div className="col-sm">
                        <div className='tech-grid'>
                            <li className="grid-item">
                                {/* card */}
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={html5} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>HTML5</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={css3} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>CSS3</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={javascript} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>JavaScript</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                {/* typescript */}
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={typescript} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>TypeScript</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={nodejs} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>Node.js</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={react} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>React</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                {/* angular */}
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={angular} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>Angular</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li className="grid-item">
                                {/* c# */}
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={csharp} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>C#</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            {/* java */}
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={java} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>Java</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            {/* linux */}
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={linux} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>Linux</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            {/* mongodb */}
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={mongodb} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>MongoDB</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            {/* postgresql */}
                            <li className="grid-item">
                                <Card outline className='techCard'>
                                    <Card.Img className='projectCardImage' variant='top' src={postgresql} width='60px' height='60px' />
                                    <Card.Body>
                                        <Card.Text className='cardContent text-dark'>PostgreSQL</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default About;
