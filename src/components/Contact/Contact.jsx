import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './Contact.scss';

class Contact extends Component {
    render() {
        const pageTitle = 'Contact Info & Socials';
        return (
            <div className='contactPage'>
                <Helmet>
                    <title>Nathan Hannon | {pageTitle}</title>
                </Helmet>
                <header className='contactHeader'>
                    <h1>{pageTitle}</h1>
                    <FontAwesomeIcon icon={['fas', 'phone']} />
                    <a href='tel:519-878-6227' className='contactLink' alt='Call 519-878-6227' tabindex="-1" aria-disabled="true"> Call me!</a>
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                    <a href='mailto:nathan@hannon.me' className='contactLink' alt='Send email to nathan@hannon.me' tabindex="-1" aria-disabled="true"> Send an email!</a>
                </header>
                <div className='socialLinks'>
                    <p>
                        <a href='https://github.com/NathanHannon' className='githubLink' target='_blank' rel='noreferrer noopener' title='GitHub Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
                        <a href='https://www.linkedin.com/in/nathan-hannon' className='linkedinLink' target='_blank' rel='noreferrer noopener' title='LinkedIn Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></a>
                        <a href='https://dev.to/nathanhannon' className='devLink' target='_blank' rel='noreferrer noopener' title='Dev.to Profile' tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={['fab', 'dev']} size='2x' /></a>
                    </p>
                </div>
            </div>
        );
    }
}
export default Contact;