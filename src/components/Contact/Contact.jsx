import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
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
                        <a href='https://github.com/NathanHannon' className='githubLink' target='_blank' rel='noreferrer noopener' title='GitHub Profile' tabIndex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
                        <a href='https://www.linkedin.com/in/nathan-hannon' className='linkedinLink' target='_blank' rel='noreferrer noopener' title='LinkedIn Profile' tabIndex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></a>
                        <a href='https://dev.to/nathanhannon' className='devLink' target='_blank' rel='noreferrer noopener' title='Dev.to Profile' tabIndex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'dev']} size='2x' /></a>
                    </p>
                </div>
            </div>
        );
    }
}
export default Contact;