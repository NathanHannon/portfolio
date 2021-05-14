
import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

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
			<Navbar color='primary' dark className='navbar-expand-sm navbar-toggleable-sm box-shadow mb-3 fixed-top'>
				<NavbarBrand href='/' className='mr-auto brand' tabindex="-1" aria-disabled="true"><h4>Nathan Hannon</h4></NavbarBrand>
				<NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
				<Collapse className='d-sm-inline-flex flex-sm-row-reverse' isOpen={!this.state.collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='/' className='text-white' tabindex="-1" aria-disabled="true">About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/projects' className='text-white' tabindex="-1" aria-disabled="true">My Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/contact' className='text-white' tabindex="-1" aria-disabled="true">Resumé & Contact Info</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default (NavMenu);