import React, { useContext } from 'react';
import { Animated } from 'react-animated-css';
import animationContext from '../../context/animationContext';

import './Salute.css';

export default function Salute() {
  const { visibleContent, handleNavigate } = useContext(animationContext);

  const isVisible = visibleContent === '/';

  return (
    <Animated
      animationIn="fadeIn"
      animationInDelay={200}
      animationInDuration={1000}
      animationOutDuration={300}
      animationOut="fadeOut"
      isVisible={isVisible}
    >
      <div className="salute">
        <div>
          <h1>Olá e bem-vindo(a)!</h1>
          <h2>Meu nome é Higor Maranhão,</h2>
          <span>sou desenvolvedor web.</span>
          <p>Vou compartilhar um pouco sobre mim.</p>
          <div className="navigate">
            <div>
              <button
                name="/about"
                onClick={handleNavigate}
                type="button"
              ></button>
              <i className="fa-solid fa-circle-arrow-right fa-3x" />
            </div>
          </div>
        </div>
        <div>
          <img
            className="photo"
            src="https://github.com/HigorMN.png"
            alt="Higor Maranhão"
          />
        </div>
      </div>
    </Animated>
  );
}
