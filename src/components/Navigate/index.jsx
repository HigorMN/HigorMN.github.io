import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';

export default function Navigate({ left, right }) {
  const { handleNavigate } = useContext(animationContext);
  return (
    <div className="navigate">
      <div>
        <i className="fa-solid fa-circle-arrow-left fa-3x" />
        <button name={left} onClick={handleNavigate} type="button"></button>
      </div>
      <div>
        <button name={right} onClick={handleNavigate} type="button"></button>
        <i className="fa-solid fa-circle-arrow-right fa-3x" />
      </div>
    </div>
  );
}
