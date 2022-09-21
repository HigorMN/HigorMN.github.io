import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import './css/Main.css'
import './css/Header.css'


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    )
  }
}

