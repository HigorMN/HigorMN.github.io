import React, { Component } from 'react';
import arrow from '../images/arrow.png';

export default class Arrow extends Component {
  render() {
    const { to } = this.props;
    return (
      <div className="border-btt center">
        <a href={to} className="arrow-container">
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    );
  }
}
