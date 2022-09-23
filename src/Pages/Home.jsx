import React, { Component } from 'react';
import Arrow from '../components/Arrow';
import ContactLinks from '../components/ ContactLinks';
import About from './About';

export default class Home extends Component {
  render() {
    return (
      <main className="home border-btt">
        <div className="home-first-container">
          <h3>Olá, eu sou</h3>
          <h1>Higor Maranhão</h1>
          <h3>Fullstack Develover</h3>
          <ContactLinks />
        </div>
        <Arrow to="#about" />
        <div className="center mt" id="about">
          <h2 className="h2">Sobre</h2>
        </div>
        <About />
        <Arrow to="#footer" />
      </main>
    );
  }
}
