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
                Meu nome é Higor Maranhão, moro em Borborema - PB,
                sou Desenvolvedor Full Stack Web.
              </p>
              <br />
              <p>
                Sou um desenvolvedor apaixonado por tecnologia e jogos,
                sempre buscando soluções inovadoras e criativas. Tenho
                uma formação parcial em Análise e Desenvolvimento de
                Sistemas pela Unopar e atualmente estou me formando como
                desenvolvedor Full Stack pela Trybe.
              </p>
              <br />
              <p>
                Possuo habilidades em desenvolvimento Full Stack, liderança
                e trabalho em equipe, com experiência em tecnologias como React,
                JavaScript, TypeScript, Redux, Hooks, Jest, RTL, TDD, Git,
                GitHub, NodeJS, Node, Docker, MySQL, MongoDB, SQL, NoSQL,
                Express, Sequelize, Mocha, Chai, JWT, POO, SOLID, APIs e Next.
              </p>
              <br />
              <p>
                Como pessoa, sou empático, adaptável, criativo e paciente, sempre
                buscando compreender os problemas do negócio e propor soluções
                para agregar valor aos produtos. Meu objetivo é continuar me
                desenvolvendo e aprendendo em minha carreira para contribuir
                de forma eficaz em projetos futuros
              </p>
              <br />
              <p>
                Sinta-se à vontade para conferir meu perfil no GitHub:
                https://github.com/HigorMN
                e entrar em contato para conversar ou esclarecer qualquer dúvida.
                Estou sempre disponível!
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
