import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';

import data from '../Data/projects';
import './ProjectsCard.css';

import github from '../images/github.png';
import browserIcon from '../images/browserIcon.svg';

export default function ProjectsCard(props) {
  const [dataAPI, setDataAPI] = useState([]);
  const { module } = props;

  useEffect(() => {
    const feath = () => {
      const filter = data.filter((e) => e.module.includes(module));
      setDataAPI(filter);
    };
    feath();
  }, [module]);

  const widthWindow = () => {
    const TAMANHO1 = 1280;
    const TAMANHO2 = 640;
    const COUNT3 = 3;

    if (window.screen.width > TAMANHO1) {
      return COUNT3;
    } if (window.screen.width <= TAMANHO2) {
      return 1;
    } if (window.screen.width <= TAMANHO1) {
      return 2;
    }
  };

  return (
    <div className="Cards">
      <Carousel itemsToShow={ widthWindow() }>
        {dataAPI.map((e, index) => (
          <div key={ index } className="Card_container">
            <a href={ e.linkWeb } target="_blank" rel="noreferrer">
              <img src={ e.image } alt={ e.name } className="Card__IMG__Project" />
            </a>
            <div className="Card__topics__container">
              {e.topics.map((img, indexImg) => (
                <img key={ indexImg } src={ img } alt={ indexImg } />
              ))}
            </div>
            <div className="Card__links__container">
              <a href={ e.linkRepository } target="_blank" rel="noopener noreferrer">
                <img src={ github } alt="Repositorio" width="40" />
              </a>
              <p>{e.name}</p>
              <a href={ e.linkWeb } target="_blank" rel="noopener noreferrer">
                <img src={ browserIcon } alt="browserIcon" width="40" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

ProjectsCard.propTypes = {
  module: PropTypes.string.isRequired,
};
