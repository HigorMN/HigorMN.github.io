import React from 'react';
import ProjectsCard from '../components/ProjectsCard';

export default function Projects() {
  return (
    <main id="projects">
      <div className="Projects">
        <h1 className="h2">PROJETOS FAVORITOS</h1>
        <ProjectsCard module="favoritos" />
        <br />
        <br />
        <br />
        <br />
        <h1 className="h2">PROJETOS FRONT-END</h1>
        <ProjectsCard module="front-end" />
        <br />
        <br />
        <br />
        <br />
        <h1 className="h2">PROJETOS DE FUNDAMENTO</h1>
        <ProjectsCard module="fundamentos" />
      </div>
    </main>
  );
}
