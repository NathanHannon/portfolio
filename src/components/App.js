
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import NavMenu from './NavMenu';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects/Projects';
import { Helmet } from 'react-helmet';

library.add(fab, fas);
class App extends Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<div className='NavContainer'>
						<NavMenu />
					</div>
					<div className='App'>
						<Routes>
							<Route exact path='/' element={<About />} />
							<Route path='/about' element={<About />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/resume' element={<Resume />} />
							<Route path='/contact' element={<Contact />} />
							<Route element={<NotFoundPage />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;