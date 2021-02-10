import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className='contactPage'>
                <header className='contactHeader'>
                    <h1>Resumé & Contact Info</h1>
                    <FontAwesomeIcon icon={['fas', 'phone']} />
                    <a href='tel:519-878-6227' className='contactLink' alt='Call 519-878-6227'> Call me!</a>
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                    <a href='mailto:nathan@hannon.me' className='contactLink' alt='Send email to nathan@hannon.me'> Send an email!</a>
                </header>
                <div class='iframe-container'>
                    <iframe seamless='seamless' frameborder='0' src={'https://storage.googleapis.com/portfolio-file-bucket/Nathan%20Hannon%20Resume%20(Modern).pdf'} title='Resume' />
                </div>
            </div>
        );
    }
}
export default Contact;