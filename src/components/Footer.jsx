import React, { Component } from 'react';
import ContactLinks from './ ContactLinks';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="border-top">
        <h2 className="h2">Contato</h2>
        <p>Estamos a um click de distância!!</p>
        <ContactLinks />
      </footer>
    );
  }
}
