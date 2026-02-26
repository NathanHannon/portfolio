import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev, faThreads } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './Contact.scss';

const socialLinks = [
    { icon: faGithub, href: 'https://github.com/NathanHannon', label: 'GitHub', className: 'social-github' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/nathan-hannon', label: 'LinkedIn', className: 'social-linkedin' },
    { icon: faDev, href: 'https://dev.to/nathanhannon', label: 'Dev.to', className: 'social-dev' },
    { icon: faThreads, href: 'https://www.threads.com/@nate.hannon', label: 'Threads', className: 'social-threads' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    }),
};

const Contact = () => {
    return (
        <div className="contactPage">
            <Helmet>
                <title>Nathan Hannon | Contact</title>
            </Helmet>

            <section className="contact-hero">
                <motion.div
                    className="contact-hero-inner"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="section-label mono">Connect</span>
                    <h1 className="contact-title">Let's Work Together</h1>
                    <p className="contact-subtitle">
                        Have a project in mind or just want to say hello?
                        I'd love to hear from you.
                    </p>
                </motion.div>
            </section>

            <section className="contact-content">
                <motion.div
                    className="social-grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.08, delayChildren: 0.3 },
                        },
                    }}
                >
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            title={`${link.label} Profile`}
                            className={`social-link ${link.className}`}
                            variants={fadeUp}
                            custom={i}
                            whileHover={{ y: -4 }}
                        >
                            <FontAwesomeIcon icon={link.icon} className="social-icon" />
                            <span className="social-name">{link.label}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;