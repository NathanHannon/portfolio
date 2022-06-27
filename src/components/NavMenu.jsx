
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/nathan.png';
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
			<Navbar bg='primary' variant='dark' fixed='top' expand='sm' className='nav-tabs'>
				<Navbar.Brand href='/' className='mr-auto brand' tabindex="-1" aria-disabled="true" alt="Home Page"><img src={Logo} alt="Branding" /></Navbar.Brand>
				<Navbar.Toggle onClick={this.toggleNavbar} aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse className='d-sm-inline-flex flex-sm-row-reverse' id='responsive-navbar-nav' isOpen={!this.state.collapsed} navbar>
					<Nav>
						<Nav.Link href='/' className='text-white nav-link' tabindex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'address-card']} /> About Me</Nav.Link>
						<Nav.Link href='/projects' className='text-white nav-link' tabindex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'code']} /> My Projects
						</Nav.Link>
						<Nav.Link href='/contact' className='text-white nav-link' tabindex="-1" aria-disabled="true">
							<FontAwesomeIcon icon={['fas', 'file']} /> Resumé &amp; Contact Info
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default (NavMenu);
