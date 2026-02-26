import React from 'react';
import { motion } from 'framer-motion';
import not_found_image from '../assets/pictures/sarah-kilian-unsplash.jpg';

const notFoundStyles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
    },
    label: {
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.8rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: '#c9a87c',
        marginBottom: '0.75rem',
    },
    title: {
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
    },
    subtitle: {
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '1.1rem',
        color: '#6b6770',
        marginBottom: '2rem',
        lineHeight: 1.7,
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '20px',
        marginBottom: '1.5rem',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
    },
    link: {
        display: 'inline-block',
        padding: '0.75rem 2rem',
        background: '#c9a87c',
        color: '#0a0a0f',
        borderRadius: '100px',
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 600,
        fontSize: '0.95rem',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        marginBottom: '2rem',
    },
    credit: {
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.8rem',
        color: '#8a8692',
    },
};

const NotFoundPage = () => {
    return (
        <motion.div
            style={notFoundStyles.page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <span style={notFoundStyles.label}>Error 404</span>
            <h1 style={notFoundStyles.title}>Page Not Found</h1>
            <p style={notFoundStyles.subtitle}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" style={notFoundStyles.link}>
                Back to Home
            </a>
            <img src={not_found_image} alt="404 illustration" style={notFoundStyles.image} />
            <span style={notFoundStyles.credit}>
                Photo by{' '}
                <a href="https://unsplash.com/@rojekilian" style={{ color: '#c9a87c' }}>Sarah Kilian</a>{' '}
                on{' '}
                <a href="https://unsplash.com/s/photos/404-error" style={{ color: '#c9a87c' }}>Unsplash</a>
            </span>
        </motion.div>
    );
};

export default NotFoundPage;