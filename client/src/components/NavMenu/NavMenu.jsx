// src/components/NavMenu.js
import React, { useState, useContext } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/SVGs/brand-logo/NH-Initials.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import { ThemeContext } from '../../context/ThemeContext';
import './NavMenu.scss';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar className="navbar-custom" variant="dark" fixed="top" expand="sm" bg="primary">
      <Navbar.Brand href="/" className="mr-auto brand" tabIndex="-1" aria-disabled="true" alt="Home Page">
        <Image rounded={true} src={Logo} alt="Branding" height={'40'} width={'auto'} />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="d-sm-inline-flex flex-sm-row-reverse"
        id="responsive-navbar-nav"
        isopen={(!collapsed).toString()}
      >
        <Nav>
          <Nav.Link href="/" className="text-white nav-link" tabIndex="-1" aria-disabled="true">
            <FontAwesomeIcon icon={['fas', 'address-card']} /> About Me
          </Nav.Link>
          <Nav.Link href="/projects" className="text-white nav-link" tabIndex="-1" aria-disabled="true">
            <FontAwesomeIcon icon={['fas', 'code']} /> My Projects
          </Nav.Link>
          <Nav.Link href="/contact" className="text-white nav-link" tabIndex="-1" aria-disabled="true">
            <FontAwesomeIcon icon={['fas', 'users']} /> Contact Me
          </Nav.Link>
        </Nav>
        <DarkModeToggle
          isDarkMode={darkMode}
          onChange={toggleDarkMode}
          size={50}
          className="dark-mode-toggle"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;