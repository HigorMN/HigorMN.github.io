import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import './css/Header.css';
import './css/Main.css';
import Footer from './components/Footer';
import About from './Pages/About';
import Projects from './Pages/Projects';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}
