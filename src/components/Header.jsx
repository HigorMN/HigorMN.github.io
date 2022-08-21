import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li id="inicio">
            <a href="inicio">Início</a>
          </li>
          <li>
            <a href="sobre">Sobre</a>
          </li>
          <li>
            <a href="projetos">Projetos</a>
          </li>
          <li>
            <a href="habilidades">Habilidades</a>
          </li>
          <li>
            <a href="contato">Contato</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
