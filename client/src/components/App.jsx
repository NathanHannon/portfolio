// src/App.jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import NavMenu from './NavMenu/NavMenu';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects/Projects';
import { ThemeProvider } from '../context/ThemeContext';
import '../index.scss';

library.add(fab, fas, far);

const App = () => {
	return (
		<ThemeProvider>
			<div className="app">
				<BrowserRouter>
					<NavMenu />
					<main className="App">
						<Routes>
							<Route path="/" element={<About />} />
							<Route path="/about" element={<About />} />
							<Route path="/projects" element={<Projects />} />
							{/* <Route path="/resume" element={<Resume />} /> */}
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</main>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default App;