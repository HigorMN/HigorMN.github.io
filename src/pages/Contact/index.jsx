import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';
import { Redirect, useLocation } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import contacts from '../../database/contacts';
import './Contact.css';
import Navigate from '../../components/Navigate';

export default function Contact() {
  const { location, visibleContent } = useContext(animationContext);

  const { pathname } = useLocation();

  const isVisible = visibleContent === '/contact';

  if (pathname !== location) return <Redirect to={location} />;
  return (
    <Animated
      animationIn="fadeIn"
      animationInDuration={1000}
      animationOutDuration={300}
      animationOut="fadeOut"
      isVisible={isVisible}
    >
      <div className="page">
        <h2 className="title">Contatos</h2>
        <Navigate left="/projects" right="/" />
        <div className="contact">
          <div className="contact-box">
            {contacts.map((contact) => (
              <a
                target="_blank"
                key={contact.name}
                rel="noreferrer"
                href={contact.source}
                className="contact-card"
              >
                <div>{contact.icon}</div>
                <div>
                  <h3>{contact.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}
