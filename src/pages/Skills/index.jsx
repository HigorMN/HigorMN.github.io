import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';
import { Redirect, useLocation } from 'react-router-dom';

import skills from '../../database/skills';

import Navigate from '../../components/Navigate';

import './Skills.css';
import { Animated } from 'react-animated-css';

export default function Skills() {
  const { location, visibleContent } = useContext(animationContext);

  const { pathname } = useLocation();

  const isVisible = visibleContent === '/skills';

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
        <div className="skills">
          <h2 className="title">Habilidades</h2>
          <Navigate left="/about" right="/projects" />
          <div className="skills-container">
            {skills.map((skill, index) => (
              <Animated
                key={skill.name}
                animationIn="fadeInUp"
                animationInDelay={100 * Number(index)}
                animationInDuration={800}
                animationOutDuration={300}
                animationOut="fadeOut"
                isVisible={isVisible}
              >
                <div className="skill-card">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <h3>{skill.name}</h3>
                  <ul>
                    {skill.subTitles.map((title) => (
                      <li key={title}>{title}</li>
                    ))}
                  </ul>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}
