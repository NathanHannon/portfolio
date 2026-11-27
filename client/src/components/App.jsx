// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import About from './About/About';
import Contact from './Contact/Contact';
import NavMenu from './NavMenu/NavMenu';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects/Projects';
import { ThemeProvider } from '../context/ThemeContext';

const App = () => {
	return (
		<MotionConfig reducedMotion="user">
			<ThemeProvider>
				<div className="app">
					<BrowserRouter>
						<NavMenu />
						<main className="App">
							<Routes>
								<Route path="/" element={<About />} />
								<Route path="/about" element={<About />} />
								<Route path="/projects" element={<Projects />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</main>
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</MotionConfig>
	);
};

export default App;