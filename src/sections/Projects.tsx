import ExternalLink from '../components/ExternalLink';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../content/portfolio';

export default function Projects() {
  return (
    <section
      className="section section--projects"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="02 · Código público"
          id="projects-title"
          title="Projetos escolhidos pelo que demonstram."
          description="Uma seleção curta de trabalhos de formação que deixam decisões técnicas visíveis. O código profissional permanece privado; o aprendizado, não."
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>

        <div className="section-action">
          <ExternalLink
            className="text-link"
            href="https://github.com/HigorMN?tab=repositories"
          >
            Explorar todos os repositórios <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
