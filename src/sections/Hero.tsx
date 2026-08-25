import ExternalLink from '../components/ExternalLink';
import { proofPoints } from '../content/portfolio';

const layers = [
  {
    index: '01',
    name: 'Interface',
    detail: 'React · TypeScript',
  },
  {
    index: '02',
    name: 'Serviços',
    detail: 'Node.js · .NET/C#',
  },
  {
    index: '03',
    name: 'Dados e integrações',
    detail: 'PostgreSQL · REST',
  },
] as const;

function HeroSystem() {
  return (
    <aside className="hero-system" aria-label="Visão da atuação técnica">
      <div className="hero-system__header">
        <span>Produto em camadas</span>
        <span className="status">
          <span className="status__dot" aria-hidden="true" />
          ponta a ponta
        </span>
      </div>

      <ol className="system-layers">
        {layers.map((layer) => (
          <li className="system-layer" key={layer.name}>
            <span className="system-layer__index">{layer.index}</span>
            <span>
              <strong>{layer.name}</strong>
              <small>{layer.detail}</small>
            </span>
          </li>
        ))}
      </ol>

      <p className="hero-system__footer">
        A arquitetura sustenta a experiência — e não o contrário.
      </p>
    </aside>
  );
}

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Resumo profissional">
      <div className="container proof-strip__inner">
        {proofPoints.map((item) => (
          <div className="proof-point" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">Full Stack Developer · Brasil</p>
        <h1 id="hero-title">
          Complexidade de negócio, <span>clareza na experiência.</span>
        </h1>
        <p className="hero__summary">
          Sou Higor Maranhão. Desenvolvo produtos SaaS e ERP com React,
          TypeScript, Node.js e .NET/C#, aproximando UX, arquitetura e
          performance para criar software simples de usar e consistente para
          evoluir.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#trabalho">
            Ver meu trabalho
            <span aria-hidden="true">↓</span>
          </a>
          <ExternalLink
            className="button button--secondary"
            href="https://www.linkedin.com/in/higor-maranhao/"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>

      <HeroSystem />
    </section>
  );
}
