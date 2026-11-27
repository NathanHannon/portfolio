// src/components/NavMenu.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/SVGs/brand-logo/NH-Initials.svg';
import { ThemeContext } from '../../context/ThemeContext';
import './NavMenu.scss';

const ThemeToggle = ({ darkMode, toggle }) => (
  <button
    className={`theme-toggle ${darkMode ? 'is-dark' : 'is-light'}`}
    onClick={toggle}
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    aria-pressed={darkMode}
    type="button"
  >
    <div className="toggle-track">
      <div className="toggle-thumb">
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="toggle-icon" />
      </div>
    </div>
  </button>
);

const NavMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const closeNavbar = () => setExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className={`navbar-editorial ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-inner">
          <Link to="/" className="brand" onClick={closeNavbar}>
            <img src={Logo} alt="Nathan Hannon logo" height="36" width="36" className="brand-logo" />
            <span className="brand-name">Nathan Hannon</span>
          </Link>

          <button
            type="button"
            className="navbar-toggler-editorial"
            aria-controls="responsive-navbar-nav"
            aria-expanded={expanded}
            aria-label={expanded ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <FontAwesomeIcon icon={expanded ? faXmark : faBars} />
          </button>

          <div
            className={`navbar-collapse ${expanded ? 'is-open' : ''}`}
            id="responsive-navbar-nav"
          >
            <div className="nav-links">
              <NavLink to="/" end className="nav-link-editorial" onClick={closeNavbar}>
                About
              </NavLink>
              <NavLink to="/projects" className="nav-link-editorial" onClick={closeNavbar}>
                Projects
              </NavLink>
              <NavLink to="/contact" className="nav-link-editorial" onClick={closeNavbar}>
                Contact
              </NavLink>
            </div>
            <ThemeToggle darkMode={darkMode} toggle={toggleDarkMode} />
          </div>
        </div>
      </nav>
    </header>
  );
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;