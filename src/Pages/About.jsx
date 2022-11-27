import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <>
        <div className="center mt" id="about">
          <h2 className="h2">Sobre</h2>
        </div>
        <div className="About__container center">
          <div className="About__container__article">
            <article className="About__article">
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
                alt="Imagem Higor Maranhão"
                className="home-img"
              />
              <h1>Higor Maranhão</h1>
            </div>
          </div>
          <div className="mt" />
        </div>
      </>
    );
  }
}
