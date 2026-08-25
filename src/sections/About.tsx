import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section
      className="section container"
      id="sobre"
      aria-labelledby="about-title"
    >
      <SectionHeading
        eyebrow="05 · Sobre"
        id="about-title"
        title="Curiosidade técnica, atenção humana."
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Comecei a programar aos 17 anos, depois de passar boa parte da
            adolescência desmontando, entendendo e consertando computadores.
            Trabalhar com manutenção por anos me ensinou algo que ainda levo
            para o software: tecnologia só tem valor quando resolve um problema
            real para alguém.
          </p>
          <p>
            Minha formação Full Stack na Trybe consolidou essa transição. De lá
            para cá, troquei exercícios isolados por produtos vivos, colaboração
            entre áreas e decisões que precisam continuar fazendo sentido meses
            depois.
          </p>
          <p className="about-copy__personal">
            Fora do código, games e bicicleta ajudam a reiniciar o sistema. E,
            sim, minha risada ainda lembra o Muttley.
          </p>
        </div>

        <aside className="education" aria-label="Formação">
          <p className="detail-label">Formação</p>
          <div className="education__item">
            <span>2022—2023</span>
            <h3>Desenvolvimento Web Full Stack</h3>
            <p>Trybe</p>
          </div>
          <div className="education__item">
            <span>Formação parcial</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>UNOPAR</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
