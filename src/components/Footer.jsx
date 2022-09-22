import React, { Component } from 'react';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import github from '../images/github.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <h2 className="h2">Contato</h2>
        <p>Estamos a um click de distância!!</p>
        <nav className="contact-nav-container">
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
      </footer>
    );
  }
}
