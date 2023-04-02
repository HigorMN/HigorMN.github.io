import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';

import './Menu.css';

export default function Menu() {
  const { handleNavigate } = useContext(animationContext);

  const nav = [
    { name: 'Home', path: '/', icon: <i className="fa-solid fa-house-user" /> },
    { name: 'Sobre', path: '/about', icon: <i className="fa-solid fa-user" /> },
    {
      name: 'Habilidades',
      path: '/skills',
      icon: <i className="fa-solid fa-list" />,
    },
    {
      name: 'Projetos',
      path: '/projects',
      icon: <i className="fa-solid fa-paperclip" />,
    },
    {
      name: 'Contatos',
      path: '/contact',
      icon: <i className="fa-solid fa-address-book" />,
    },
  ];
  return (
    <nav className="menu">
      {nav.map((nav) => (
        <div key={nav.name}>
          <button
            className="menu-nav"
            name={nav.path}
            onClick={handleNavigate}
            type="button"
          >
            {nav.icon}
            <p>{nav.name}</p>
          </button>
        </div>
      ))}
    </nav>
  );
}
