import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	//Toggle for navbar collapsing
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	componentDidMount() {
		console.log(this.props.status)
	}

	render() {
		return (
			<header>
				<Navbar color="primary" className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3 navmenu" dark>
					<NavbarBrand href="/" className="mr-auto"><h4>Portfolio</h4></NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/" className="text-white">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/About" className="text-white">About Me</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/Projects" className="text-white">My Projects</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/Contact" className="text-white">Resumé & Contact Info</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}

export default (NavMenu);

