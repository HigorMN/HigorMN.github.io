import SectionHeading from '../components/SectionHeading';

const professionalStack = [
  'React',
  'TypeScript',
  'Mantine UI',
  'Ant Design',
  'React Hook Form',
  'Zod',
  'Zustand',
  '.NET / C#',
  'PostgreSQL',
] as const;

export default function Experience() {
  return (
    <section
      className="section container"
      id="trabalho"
      aria-labelledby="work-title"
    >
      <SectionHeading
        eyebrow="01 · Experiência profissional"
        id="work-title"
        title="Software para uma operação que não pode parar."
        description="Meu principal contexto hoje é um ERP usado no dia a dia de oficinas automotivas — um produto amplo, com regras densas e diferentes perfis de usuário."
      />

      <article className="experience-card">
        <div className="experience-card__identity">
          <div>
            <p className="eyebrow">Ultracar · 2023—agora</p>
            <h3>Frontend Developer</h3>
          </div>
          <span className="experience-card__domain">SaaS / ERP automotivo</span>
        </div>

        <div className="experience-card__body">
          <p className="experience-card__lead">
            Evoluo interfaces e fluxos para módulos financeiros, estoque, CRM e
            operação. O objetivo é direto: reduzir o esforço de quem usa sem
            transferir complexidade para quem mantém.
          </p>

          <div className="experience-grid">
            <div>
              <p className="detail-label">Produto e UX</p>
              <p>
                Componentes reutilizáveis, formulários complexos, validação,
                acessibilidade e consistência entre módulos.
              </p>
            </div>
            <div>
              <p className="detail-label">Engenharia</p>
              <p>
                Estado previsível, modularização, performance e colaboração com
                APIs em .NET/C# e PostgreSQL.
              </p>
            </div>
            <div>
              <p className="detail-label">Arquitetura</p>
              <p>
                Participação em decisões técnicas e integrações com parceiros
                nacionais e globais, incluindo Bosch e ZF.
              </p>
            </div>
          </div>

          <ul
            className="tag-list tag-list--experience"
            aria-label="Stack usada na Ultracar"
          >
            {professionalStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
