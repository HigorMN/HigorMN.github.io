import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav-link">
          <Link to="/">INÍCIO</Link>
          <Link to="/">SOBRE</Link>
          <Link to="/">PROJETOS</Link>
          <Link to="/">HABILIDADES</Link>
          <Link to="/">CONTATO</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
