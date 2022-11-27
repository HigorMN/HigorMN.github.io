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
        <Arrow to="#skills" />
        <div id="skills">
          <div className="center mt" id="about">
            <h2 className="h2">Habilidades</h2>
          </div>
          <div className="Hab__Container__List">
            <ul>
              <p>Desenvolvedor Front-end</p>
              <li>React</li>
              <li>JavaScript</li>
              <li>Redux</li>
              <li>Hooks</li>
              <li>Jest</li>
              <li>RTL</li>
              <li>TDD</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <ul>
              <p>Liderança</p>
              <li>Ágil</li>
              <li>SCRUM</li>
              <li>Kanban</li>
              <li>Code Review</li>
              <li>Pair programming</li>
            </ul>
            <ul>
              <p>Características</p>
              <li>Empatia</li>
              <li>Adaptabilidade</li>
              <li>Criatividade</li>
              <li>Paciência</li>
            </ul>
          </div>
        </div>
        <Arrow to="#footer" />
      </main>
    );
  }
}
