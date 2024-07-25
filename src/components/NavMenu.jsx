
import React, { Component, useEffect } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/SVGs/brand-logo/NH-Initials.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';

class NavMenu extends Component {
	static displayName = NavMenu.name;

	state = {
		collapsed: true,
		darkMode: localStorage.getItem('darkMode') === 'enabled' || window.matchMedia('(prefers-color-scheme: dark)').matches,
	};

	toggleLightMode = () => {
		const body = document.body;
		const isDarkMode = body.classList.contains('dark-mode');
		const isForcedLightMode = body.classList.contains('force-light-mode');

		if (isDarkMode || isForcedLightMode) {
			body.classList.remove('dark-mode');
			body.classList.toggle('force-light-mode');
		} else {
			body.classList.remove('force-light-mode');
		}
	}

	componentDidMount() {
		this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange);

		if (this.state.darkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}

	componentWillUnmount() {
		this.darkModeMediaQuery.removeEventListener('change', this.handleSystemDarkModeChange);
	}

	handleSystemDarkModeChange = (e) => {
		const prefersDark = e.matches;
		this.setState({ darkMode: prefersDark });
		localStorage.setItem('darkMode', prefersDark ? 'enabled' : 'disabled');
		document.body.classList.toggle('dark-mode', prefersDark);
	};

	toggleDarkMode = () => {
		const newMode = !this.state.darkMode;
		localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
		this.setState({ darkMode: newMode });
		document.body.classList.toggle('dark-mode', newMode);
	};

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};


	render() {
		return (
			<Navbar className='navbar-custom' variant='dark' fixed='top' expand='sm' bg='primary'>
				<Navbar.Brand href='/' className='mr-auto brand' tabIndex="-1" aria-disabled="true" alt="Home Page"><Image rounded={true} src={Logo} alt="Branding" height={'40'} width={'auto'} /></Navbar.Brand>
				<Navbar.Toggle onClick={this.toggleNavbar} aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse className='d-sm-inline-flex flex-sm-row-reverse' id='responsive-navbar-nav' isopen={(!this.state.collapsed).toString()}>
					<Nav>
						<Nav.Link href='/' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'address-card']} /> About Me</Nav.Link>
						<Nav.Link href='/projects' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'code']} /> My Projects
						</Nav.Link>
						{/* <Nav.Link href='/resume' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'file']} /> Resumé
						</Nav.Link> */}
						{/* TODO: Add Modal Here for Contact Me */}
						<Nav.Link href='/contact' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'users']} /> Contact Me
						</Nav.Link>
					</Nav>
					<DarkModeToggle
						isDarkMode={localStorage.getItem('darkMode') === 'enabled'}
						onChange={this.toggleDarkMode}
						size={50}
					/>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default (NavMenu);
