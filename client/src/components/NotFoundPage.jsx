import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import not_found_image from '../assets/pictures/sarah-kilian-unsplash.jpg';

const NotFoundPage = () => {
    return (
        <motion.div
            className="not-found-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <Helmet>
                <title>Nathan Hannon | Page Not Found</title>
            </Helmet>
            <span className="not-found-label mono">Error 404</span>
            <h1 className="not-found-title">Page Not Found</h1>
            <p className="not-found-subtitle">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary not-found-link">
                Back to Home
            </Link>
            <img
                src={not_found_image}
                alt="Broken ice cream cone on pavement representing a 404 error"
                className="not-found-image"
                loading="lazy"
            />
            <span className="not-found-credit">
                Photo by{' '}
                <a href="https://unsplash.com/@rojekilian" target="_blank" rel="noreferrer noopener">Sarah Kilian</a>{' '}
                on{' '}
                <a href="https://unsplash.com/s/photos/404-error" target="_blank" rel="noreferrer noopener">Unsplash</a>
            </span>
        </motion.div>
    );
};

export default NotFoundPage;