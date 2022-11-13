import React from 'react';
import ProjectsCard from '../components/ProjectsCard';

export default function Projects() {
  return (
    <div id="projects-container" className="center">
      <div>
        <h1>PROJETOS DE FUNDAMENTO</h1>
        <ProjectsCard module="fundamentos" />
      </div>
    </div>
  );
}
