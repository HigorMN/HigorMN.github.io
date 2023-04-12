import React, { useContext } from 'react';

import Socials from '../Socials';
import Menu from '../Menu';

import './Header.css';
import logo from '../../images/logo.png';
import animationContext from '../../context/animationContext';

export default function Header() {
  const { handleNavigate } = useContext(animationContext);
  return (
    <header className="header">
        <button
          type="button"
          className="none"
          onClick={handleNavigate}
          name="/"
        >
            <img className="logo" src={logo} alt="logo" />
        </button>
      <Socials />
      <Menu />
    </header>
  );
}
