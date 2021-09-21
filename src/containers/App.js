
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Layout from '../components/Layout/Layout';
import NotFoundPage from '../components/NotFoundPage';
import './App.css';
import Projects from './Projects/Projects';

library.add(fab, fas);
const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<Layout />
					<div className='App'>
						<Switch>
							<Route exact path='/' component={About} />
							<Route path='/about' component={About} />
							<Route path='/projects' component={Projects} />
							<Route path='/contact' component={Contact} />
							<Route component={NotFoundPage} />
						</Switch>
						{/* <br />
            <span className="reference">Photo by <a href="https://unsplash.com/@goumbik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lukas Blazek</a> on <a href="https://unsplash.com/s/visual/c2903a3e-a65b-4741-93eb-2e53358bbfec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </span> */}
					</div>

				</Router>
			</div>
		);
	}
}

export default App;