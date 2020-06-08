import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.css';
import Layout from '../components/Layout';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
       <div>
          <Router history={history}>
            <Layout />
            <div className="App">
              <h2>Hello, My name is Nathan, and I am a computer programmer!</h2>
              <hr />
              <h3>Click the hamburger menu to go to my projects, about page, and contact info</h3>
              <Switch>
                <Route path="/About" component={About} /> 
                <Route path="/Projects" component={Projects} />
              </Switch>
            </div>
          </Router>
       </div>
    );
  }
}

export default App;
