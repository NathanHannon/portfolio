import React from 'react';
import tech_image from '../assets/pictures/sarah-kilian-unsplash.jpg'
import { Container } from 'reactstrap';

const notFoundPage = () => (
    <Container className='notFoundPage'>
        <h1>Oops! We couldn't find that page.</h1>
        <h3>You can always <a href='/'>go back.</a></h3>
        <img src={tech_image} width='800' height='500'></img>
        <br />
        <span>
            Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/s/photos/404-error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </span>
    </Container>
);

export default notFoundPage;