export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© {new Date().getFullYear()} Higor Maranhão</p>
        <p>React · TypeScript · atenção aos detalhes</p>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}
