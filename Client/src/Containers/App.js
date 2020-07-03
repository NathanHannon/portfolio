import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.css';
import Layout from '../components/Layout';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home'
import Contact from '../components/Contact/Contact'
import ProjectDetails from '../components/Projects/ProjectDetails'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
       <div>
          <Router history={history}>
            <Layout />
            <div className="App">
              <Switch>
                <Route path="/Home" component={Home} />
								<Route exact path="/" component={Home} />
                <Route path="/About" component={About} /> 
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Details" component={ProjectDetails} />
              </Switch>
            </div>
          </Router>
       </div>
    );
  }
}

export default App;
