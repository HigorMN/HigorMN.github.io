import React, { Component } from 'react';
import Arrow from '../components/Arrow';
import ContactLinks from '../components/ContactLinks';
import About from './About';
import Projects from './Projects';

export default class Home extends Component {
  render() {
    return (
      <main className="home">
        <div className="home-first-container">
          <h3>Olá, eu sou</h3>
          <h1>Higor Maranhão</h1>
          <h3>Fullstack Develover</h3>
          <ContactLinks />
        </div>
        <Arrow to="#about" />
        <About />
        <Arrow to="#projects" />
        <Projects />
        <Arrow to="#footer" />
      </main>
    );
  }
}
