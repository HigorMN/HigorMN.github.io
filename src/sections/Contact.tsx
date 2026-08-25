import ExternalLink from '../components/ExternalLink';
import { contactLinks } from '../content/portfolio';

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-section__inner">
        <div className="contact-section__copy">
          <p className="eyebrow">06 · Contato</p>
          <h2 id="contact-title">Tem um produto complexo para simplificar?</h2>
          <p>
            Vamos conversar sobre desenvolvimento web, SaaS, ERP ou uma
            oportunidade profissional.
          </p>
          <a
            className="button button--dark"
            href="mailto:higor.maranhao2000@gmail.com"
          >
            Escrever para o Higor <span aria-hidden="true">↗</span>
          </a>
        </div>

        <address className="contact-list">
          {contactLinks.map((link) => {
            const content = (
              <>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
                <span aria-hidden="true">↗</span>
              </>
            );

            return link.href.startsWith('mailto:') ? (
              <a href={link.href} key={link.label}>
                {content}
              </a>
            ) : (
              <ExternalLink href={link.href} key={link.label}>
                {content}
              </ExternalLink>
            );
          })}
        </address>
      </div>
    </section>
  );
}
