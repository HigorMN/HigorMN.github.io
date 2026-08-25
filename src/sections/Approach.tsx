import SectionHeading from '../components/SectionHeading';
import { principles } from '../content/portfolio';

export default function Approach() {
  return (
    <section
      className="section container"
      id="abordagem"
      aria-labelledby="approach-title"
    >
      <SectionHeading
        eyebrow="03 · Como eu trabalho"
        id="approach-title"
        title="Critério antes de efeito."
        description="Boas interfaces não escondem uma arquitetura ruim. Bom código não compensa um produto difícil de usar. Eu trabalho os dois lados juntos."
      />

      <ol className="principles-grid">
        {principles.map((principle) => (
          <li key={principle.number}>
            <span>{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
