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

                {/* <div class="container">
                    <form id="contact" action="" method="post">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" className='form-control' placeholder="Name" required />
                            <br />
                            <label for="email">Email</label>
                            <input type="email" className='form-control' name="email" placeholder="Email" required />
                            <br />
                            <label for="message">Message</label>
                            <textarea className='form-control' name="message" placeholder="Message" required ></textarea>
                            <br />
                            <button type="submit" id="contact-submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div> */}
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
                        {/* <Button className='contact-button' href='https://x.com/nate_hannon' target='_blank' rel='noreferrer noopener' title='X/Twitter Profile' variant='none'>
                            <FontAwesomeIcon icon={faXTwitter} size='2x' className='x-icon' />
                        </Button> */}
                        {/* <Button className='contact-button' href='https://bsky.app/profile/nathanhannon.dev' target='_blank' rel='noreferrer noopener' title='Bluesky Profile' variant='none'>
                            <FontAwesomeIcon icon={faMastodon} size='2x' className='mastodon-icon' />
                        </Button> */}
                        {/* <Button className='contact-button' href='https://bsky.app/profile/nathanhannon.dev' target='_blank' rel='noreferrer noopener' title='Bluesky Profile' variant='none'>
                            <FontAwesomeIcon icon={faBluesky} size='2x' className='bluesky-icon' />
                        </Button> */}
                        {/* <Button className='contact-button' href='https://www.threads.net/@nate.hannon' target='_blank' rel='noreferrer noopener' title='Threads Profile' variant='none'>
                            <FontAwesomeIcon icon={faThreads} size='2x' className='threads-icon' />
                        </Button> */}
                    </p>
                </div>
            </div>
        );
    }
}
export default Contact;