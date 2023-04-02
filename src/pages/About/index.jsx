import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';
import { Redirect, useLocation } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import './About.css';
import controle from '../../images/controle.png';
import bicicleta from '../../images/bicicleta.png';
import pc from '../../images/pc.png';
import Navigate from '../../components/Navigate';

export default function About() {
  const { location, visibleContent } = useContext(animationContext);

  const { pathname } = useLocation();
  const isVisible = visibleContent === '/about';

  if (pathname !== location) return <Redirect to={location} />;

  return (
    <Animated
      animationIn="fadeIn"
      animationInDuration={1000}
      animationOutDuration={300}
      animationOut="fadeOut"
      isVisible={isVisible}
    >
      <div className="page">
        <h2 className="title">Sobre mim</h2>
        <Navigate left="/" right="/skills" />
        <div className="about">
          <article className="left">
            <p>
              Olá, meu nome é Higor Maranhão Nunes e tenho 22 anos, atualmente
              moro em Borborema, Paraíba. Desde pequeno sempre fui muito ativo,
              gostava de jogar futebol na rua, andar de bicicleta e me divertir
              com outras atividades típicas da minha idade. Aos 17 anos,
              descobri minha paixão pela programação e comecei a passar horas em
              frente ao computador estudando e aprendendo sobre a área.
              <br />
              <br />
              Aos 19 anos, decidi me inscrever na faculdade de Analise e
              Desenvolvimento de Sistemas, mas infelizmente tive que interromper
              meus estudos por questões financeiras. Mas não desisti, continuei
              me atualizando e aprendendo cada vez mais sobre programação e
              tecnologia. Foi então que em 2022, conheci a Trybe, uma escola de
              desenvolvimento de software, e decidi me inscrever. Após uma
              segunda tentativa, consegui ser selecionado e atualmente faço
              parte da turma 24.
              <br />
              <br />
              Durante minha jornada na área de tecnologia, também prestei
              serviços de manutenção de computadores por mais de 5 anos, o que
              me permitiu conhecer diferentes pessoas e culturas, aprimorando
              minha comunicação e tratamento com as pessoas. Acredito que todas
              essas experiências foram fundamentais para minha formação pessoal
              e profissional, pois me permitiram adquirir habilidades
              importantes e crescer como pessoa e profissional.
              <br />
              <br />
              Além disso, meus hobbies e gostos continuam sendo muito
              importantes para mim, pois me mantêm inspirado e motivado a sempre
              buscar o melhor em mim e nos projetos em que estou envolvido.
            </p>
          </article>
          <div className="right">
            <div className="images-container">
              <img src={controle} alt="" />
              <img src={pc} alt="" />
              <Animated
                className="image-animated"
                animationIn="bounceInLeft"
                animationInDelay={600}
                animationInDuration={1000}
                animationOutDuration={300}
                animationOut="fadeOut"
                isVisible={isVisible}
              >
                <img className="image-bicicleta" src={bicicleta} alt="" />
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
}
