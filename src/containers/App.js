import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home'
import Contact from '../components/Contact/Contact'
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
