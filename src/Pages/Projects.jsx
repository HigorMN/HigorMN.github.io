import React from 'react';
import ProjectsCard from '../components/ProjectsCard';

export default function Projects() {
  return (
    <main>
      <div className="Projects">
        <h1>PROJETOS DE FUNDAMENTO</h1>
        <ProjectsCard module="fundamentos" />
      </div>
    </main>
  );
}
