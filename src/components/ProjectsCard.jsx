import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import data from '../service/projects';
import './ProjectsCard.css';

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
    <>
      {dataAPI.map((e, index) => (
        <div key={ index } className="Card__Project__container">
          <div>
            <img src={ e.image } alt={ e.name } className="Card__IMG__Project" />
            <div className="Card__topics__container">
              {e.topics.map((img, indexImg) => (
                <img key={ indexImg } src={ img } alt={ indexImg } />
              ))}
            </div>
            <p>{e.name}</p>
          </div>
        </div>
      ))}
    </>
  );
}

ProjectsCard.propTypes = {
  module: PropTypes.string.isRequired,
};
