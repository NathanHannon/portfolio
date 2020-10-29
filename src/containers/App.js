import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home';
import Layout from '../components/Layout';
import NotFoundPage from '../components/NotFoundPage';
import './App.css';
import Projects from './Projects/Projects';
// import ProjectDetails from '../components/Projects/ProjectDetails'

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
              <Route path='/home' component={Home} />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              {/* <Route path='/details' component={ProjectDetails} /> */}
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
