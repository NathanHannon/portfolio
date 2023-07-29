
import React, { Component } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/SVGs/brand-logo/NH-Initials.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavMenu extends Component {
	static displayName = NavMenu.name;

	// Set state
	state = {
		collapsed: true
	};

	//Toggle for navbar collapsing
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	toggleNavbar = this.toggleNavbar.bind(this);

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
						<Nav.Link href='/resume' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'file']} /> Resumé
						</Nav.Link>
						{/* TODO: Add Modal Here for Contact Me */}
						<Nav.Link href='/contact' className='text-white nav-link' tabIndex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'users']} /> Contact Me
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default (NavMenu);
