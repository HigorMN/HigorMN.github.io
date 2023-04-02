import React from 'react';

import Socials from '../Socials';
import Menu from '../Menu';

import './Header.css';
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <Socials />
      <Menu />
    </header>
  );
}
