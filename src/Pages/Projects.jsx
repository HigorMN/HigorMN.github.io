import React from 'react';
import ProjectsCard from '../components/ProjectsCard';

export default function Projects() {
  return (
    <main>
      <div className="Projects">
        <h2>PROJETOS DE FUNDAMENTO</h2>
        <div className="Cards">
          <ProjectsCard module="fundamentos" />
        </div>
      </div>
    </main>
  );
}
