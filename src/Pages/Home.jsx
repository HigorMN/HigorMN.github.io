import React, { Component } from 'react';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import github from '../images/github.png';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Olá, eu sou</h3>
        <h1>Higor Maranhão</h1>
        <h3>Fullstack Develover</h3>
        <p>Estamos a um click de distância</p>
        <nav>
          <a href="https://github.com/HigorMN" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub do Higor" />
          </a>
          <a href="mailto:higor.maranhao2000@gmail.com">
            <img src={gmail} alt="Email do Higor" />
          </a>
          <a
            href="https://www.linkedin.com/in/higor-maranhao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin do Higor" />
          </a>
        </nav>
      </div>
    );
  }
}
