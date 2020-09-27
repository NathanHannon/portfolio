import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <Layout />
          <div className="App">
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/details/" component={ProjectDetails} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
