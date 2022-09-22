import React, { Component } from 'react';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import github from '../images/github.png';
import Arrow from '../components/Arrow';

export default class Home extends Component {
  render() {
    return (
      <main className="home border-btt">
        <div className="home-first-container">
          <h3>Olá, eu sou</h3>
          <h1>Higor Maranhão</h1>
          <h3>Fullstack Develover</h3>
          <nav className="contact-nav-container">
            <a
              href="https://github.com/HigorMN"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <Arrow to="#about" />
        <div className="center mt" id="about">
          <h2 className="h2">Sobre</h2>
        </div>
        <div className="home-about-container center">
          <div className="home-about-container-article center">
            <article className="home-text-about">
              <p>
                Meu nome é Higor Maranhão, nasci em Guarabira/PB e sou Desenvolvedor
                Full-Stack, Front-end e Back-end.
              </p>
              <br />
              <p>
                Sou apaixonado por tecnologia e amo desenvolver e criar novas coisas. Mas
                tecnologia não é minha unica paixão, também adoro jogar em meu tempo
                livre.
              </p>
            </article>
            <div className="home-img-container">
              <img
                src="https://github.com/HigorMN.png"
                alt="Higor"
                className="home-img"
              />
              <h1>Higor Maranhão</h1>
            </div>
          </div>
          <div className="mt" />
        </div>
        <Arrow to="#footer" />
      </main>
    );
  }
}
