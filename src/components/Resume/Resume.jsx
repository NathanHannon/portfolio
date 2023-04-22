import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './Resume.scss';

class Contact extends Component {
    render() {
        const pageTitle = 'Resumé';
        return (
            <div className='contactPage'>
                <Helmet>
                    <title>Nathan Hannon | {pageTitle}</title>
                </Helmet>
                <header className='contactHeader'>
                    <h1>{pageTitle}</h1>
                </header>
                <div class='iframe-container'>
                    <iframe frameborder='0' src={'https://portfolio-file-bucket.nyc3.digitaloceanspaces.com/Resumes/Nathan%20Hannon_Resume.pdf'} title='Resume' tabindex="-1" aria-disabled="true" />
                </div>
            </div>
        );
    }
}
export default Contact;