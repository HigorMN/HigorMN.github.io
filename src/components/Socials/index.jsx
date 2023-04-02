import React from 'react';

import './Socials.css';

export default function Socials() {
  return (
    <nav className="socials">
      <a
        href="https://www.linkedin.com/in/higor-maranhao/"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin-in fa-lg" />
      </a>
      <a href="https://wa.me/5583996445068" rel="noreferrer" target="_blank">
        <i className="fa-brands fa-whatsapp fa-lg" />
      </a>
      <a href="https://github.com/HigorMN" rel="noreferrer" target="_blank">
        <i className="fa-brands fa-github fa-lg" />
      </a>
      <a
        href="mailto:higor.maranhao2000@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </nav>
  );
}
