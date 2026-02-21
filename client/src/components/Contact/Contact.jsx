import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev, faXTwitter, faMastodon, faBluesky, faThreads } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import './Contact.scss';

class Contact extends Component {
    render() {
        const pageTitle = 'Contact Me';
        return (
            <div className='contactPage'>
                <Helmet>
                    <title>Nathan Hannon | {pageTitle}</title>
                </Helmet>
                <header className='contactHeader'>
                    <h1>{pageTitle}</h1>
                </header>

                {/* mailto link placeholder */}
                <div className='emailLink'>
                    <p>
                        <a href='mailto: nathan@hannon.me' className='emailLink btn btn-primary' target='_blank' rel='noreferrer noopener' title='Email Me' tabIndex="-1" aria-disabled="true">
                            <FontAwesomeIcon icon='envelope' /> Send me an email
                        </a>
                    </p>
                </div>
                <br />
                <div className='socialLinks'>
                    <p>
                        <Button className='contact-button' href='https://github.com/NathanHannon' target='_blank' rel='noreferrer noopener' title='GitHub Profile' variant='none'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className='github-icon' />
                        </Button>
                        <Button className='contact-button' href='https://www.linkedin.com/in/nathan-hannon' target='_blank' rel='noreferrer noopener' title='LinkedIn Profile' variant='none'>
                            <FontAwesomeIcon icon={faLinkedin} size='2x' className='linkedIn-icon' />
                        </Button>
                        <Button className='contact-button' href='https://dev.to/nathanhannon' target='_blank' rel='noreferrer noopener' title='Dev.to Profile' variant='none'>
                            <FontAwesomeIcon icon={faDev} size='2x' className='dev-icon' />
                        </Button>
                        <Button className='contact-button' href='https://www.threads.com/@nate.hannon' target='_blank' rel='noreferrer noopener me' title='Threads Profile' variant='none'>
                            <FontAwesomeIcon icon={faThreads} size='2x' className='threads-icon' />
                        </Button>
                    </p>
                </div>
            </div>
        );
    }
}
export default Contact;
