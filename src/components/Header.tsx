import { navigation } from '../content/portfolio';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Higor Maranhão — início"
        >
          <span className="brand__mark" aria-hidden="true">
            HM
          </span>
          <span className="brand__name">Higor Maranhão</span>
        </a>

        <nav className="main-navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-contact"
          href="mailto:higor.maranhao2000@gmail.com"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
}
