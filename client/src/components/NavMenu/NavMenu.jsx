// src/components/NavMenu.js
import React, { useState, useContext, useEffect } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/SVGs/brand-logo/NH-Initials.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../context/ThemeContext';
import './NavMenu.scss';

const ThemeToggle = ({ darkMode, toggle }) => (
  <button
    className={`theme-toggle ${darkMode ? 'is-dark' : 'is-light'}`}
    onClick={toggle}
    aria-label="Toggle dark mode"
    type="button"
  >
    <div className="toggle-track">
      <div className="toggle-thumb">
        <FontAwesomeIcon icon={darkMode ? 'moon' : 'sun'} className="toggle-icon" />
      </div>
    </div>
  </button>
);

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      className={`navbar-editorial ${scrolled ? 'navbar-scrolled' : ''}`}
      variant={darkMode ? 'dark' : 'light'}
      fixed="top"
      expand="sm"
    >
      <div className="navbar-inner">
        <Navbar.Brand href="/" className="brand" tabIndex="-1" aria-disabled="true" alt="Home Page">
          <Image rounded={true} src={Logo} alt="Branding" height={'36'} width={'auto'} className="brand-logo" />
          <span className="brand-name">Nathan Hannon</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav" className="navbar-toggler-editorial" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
          isopen={(!collapsed).toString()}
        >
          <Nav className="nav-links">
            <Nav.Link href="/" className="nav-link-editorial" tabIndex="-1" aria-disabled="true">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="nav-link-editorial" tabIndex="-1" aria-disabled="true">
              Projects
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-editorial" tabIndex="-1" aria-disabled="true">
              Contact
            </Nav.Link>
          </Nav>
          <ThemeToggle darkMode={darkMode} toggle={toggleDarkMode} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;