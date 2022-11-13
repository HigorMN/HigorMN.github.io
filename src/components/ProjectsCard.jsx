import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import data from '../service/projects';

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
        <div key={ index }>
          <h2>{e.name}</h2>
          <img src={ e.image } alt={ e.name } width="200" />
        </div>
      ))}
    </>
  );
}

ProjectsCard.propTypes = {
  module: PropTypes.string.isRequired,
};
