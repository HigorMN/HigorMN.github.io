import React, { useContext } from 'react';
import animationContext from '../../context/animationContext';
import { Redirect, useLocation } from 'react-router-dom';

import Navigate from '../../components/Navigate';
import CardProject from '../../components/CardProject';

import projects from '../../database/projects';

import { Animated } from 'react-animated-css';
import './Project.css';

export default function Projects() {
  const { location, visibleContent } = useContext(animationContext);

  const { pathname } = useLocation();

  const isVisible = visibleContent === '/projects';

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
        <div className="project">
          <h2 className="title">Projetos</h2>
          <Navigate left="/skills" right="/contact" />
          <div className="project-box">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}
