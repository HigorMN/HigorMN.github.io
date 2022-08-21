import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="navLinks">
          <li id="inicio">
            <a href="#inicio">INÍCIO</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
          <li>
            <a href="#projetos">PROJETOS</a>
          </li>
          <li>
            <a href="#habilidades">HABILIDADES</a>
          </li>
          <li>
            <a href="#contato">CONTATO</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
