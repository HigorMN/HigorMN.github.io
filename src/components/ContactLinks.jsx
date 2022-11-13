import React, { Component } from 'react';
import linkedinLogoPNG from '../images/linkedin.png';
import gmailLogoPNG from '../images/gmail.png';
import gitHubLogoPNG from '../images/github.png';

export default class ContactLinks extends Component {
  render() {
    return (
      <nav className="contact-nav-container">
        <a href="https://github.com/HigorMN" target="_blank" rel="noopener noreferrer">
          <img src={ gitHubLogoPNG } alt="Imagem GitHub" />
        </a>
        <a href="mailto:higor.maranhao2000@gmail.com">
          <img src={ gmailLogoPNG } alt="Imagem Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/higor-maranhao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ linkedinLogoPNG } alt="Imagem Linkedin" />
        </a>
      </nav>
    );
  }
}
