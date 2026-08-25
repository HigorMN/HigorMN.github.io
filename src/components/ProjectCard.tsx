import type { Project } from '../content/portfolio';
import ExternalLink from './ExternalLink';

type ProjectCardProps = {
  index: number;
  project: Project;
};

export default function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>

      <header className="project-card__intro">
        <p className="project-card__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </header>

      <div className="project-card__details">
        <div>
          <p className="detail-label">Desafio</p>
          <p>{project.challenge}</p>
        </div>
        <div>
          <p className="detail-label">Engenharia</p>
          <p>{project.engineering}</p>
        </div>
      </div>

      <footer className="project-card__footer">
        <ul
          className="tag-list"
          aria-label={`Tecnologias usadas em ${project.title}`}
        >
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.liveUrl ? (
            <ExternalLink href={project.liveUrl}>
              Ver projeto <span aria-hidden="true">↗</span>
            </ExternalLink>
          ) : null}
          <ExternalLink href={project.repositoryUrl}>
            Código no GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </footer>
    </article>
  );
}
