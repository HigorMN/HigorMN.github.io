import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import data from '../service/projects';
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

  return (
    <div className="Card__Project__container">
      {dataAPI.map((e, index) => (
        <div key={ index }>
          <img src={ e.image } alt={ e.name } className="Card__IMG__Project" />
          <div className="Card__topics__container">
            {e.topics.map((img, indexImg) => (
              <img key={ indexImg } src={ img } alt={ indexImg } />
            ))}
          </div>
          <div className="Card__links__container">
            <a href={ e.linkRepository } target="_blank" rel="noopener noreferrer">
              <img src={ github } alt="Repositorio" width="25" />
            </a>
            <p>{e.name}</p>
            <a href={ e.linkWeb } target="_blank" rel="noopener noreferrer">
              <img src={ browserIcon } alt="browserIcon" width="25" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

ProjectsCard.propTypes = {
  module: PropTypes.string.isRequired,
};
