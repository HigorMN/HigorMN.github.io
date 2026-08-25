import SectionHeading from '../components/SectionHeading';
import { stackGroups } from '../content/portfolio';

export default function Stack() {
  return (
    <section
      className="section section--stack"
      id="stack"
      aria-labelledby="stack-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="04 · Ferramentas"
          id="stack-title"
          title="Stack organizada pelo trabalho que resolve."
          description="Tecnologia é meio. Escolho ferramentas pela clareza que trazem ao produto, ao time e à manutenção."
        />

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-group" key={group.title}>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul>
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
