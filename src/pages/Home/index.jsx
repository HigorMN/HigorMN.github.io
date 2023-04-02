import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import animationContext from '../../context/animationContext';
import Salute from '../../components/Salute';

export default function Home() {
  const { location } = useContext(animationContext);

  const { pathname } = useLocation();

  if (pathname !== location) return <Redirect to={location} />;

  return (
    <div className="page">
      <Salute />
    </div>
  );
}
