
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact/Contact';
import NavMenu from './NavMenu';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects/Projects';

library.add(fab, fas);
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className='NavContainer'>
						<NavMenu />
					</div>
					<div className='App'>
						<Switch>
							<Route exact path='/' component={About} />
							<Route path='/about' component={About} />
							<Route path='/projects' component={Projects} />
							<Route path='/contact' component={Contact} />
							<Route component={NotFoundPage} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;