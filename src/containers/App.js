import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../components/Layout';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home'
import Contact from '../components/Contact/Contact'
import ProjectDetails from '../components/Projects/ProjectDetails'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
          <div className="App">
            <Switch>
              <Route path="/Home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Details/:project_id" component={ProjectDetails} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
