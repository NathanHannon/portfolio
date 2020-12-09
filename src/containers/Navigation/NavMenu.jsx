import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';
// import DarkModeToggle from '../../components/DarkMode'

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

	componentDidMount() {
		console.log(this.props.status)
	}

	render() {
		return (
			<Navbar color='primary' dark className='navbar-expand-sm navbar-toggleable-sm box-shadow mb-3 navmenu'>
				<NavbarBrand href='/' className='mr-auto brand'><h4>Portfolio</h4></NavbarBrand>
				{/* <DarkModeToggle className='dark-mode-toggle' /> */}
				<NavbarToggler onClick={this.toggleNavbar} className='mr-2 dropdown' />
				<Collapse className='d-sm-inline-flex flex-sm-row-reverse' isOpen={!this.state.collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='/' className='text-white'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/about' className='text-white'>About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/projects' className='text-white'>My Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/contact' className='text-white'>Resumé & Contact Info</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default (NavMenu);

