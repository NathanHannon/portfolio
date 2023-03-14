import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './Contact.scss';

class Contact extends Component {
    render() {
        const pageTitle = 'Resumé & Contact Info';
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
                <div class='iframe-container'>
                    <iframe frameborder='0' src={'https://portfolio-file-bucket.nyc3.digitaloceanspaces.com/Resumes/Nathan%20Hannon_Resume.pdf'} title='Resume' tabindex="-1" aria-disabled="true" />
                </div>
            </div>
        );
    }
}
export default Contact;