import About from './sections/About';
import Approach from './sections/Approach';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero, { ProofStrip } from './sections/Hero';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProofStrip />
        <Experience />
        <Projects />
        <Approach />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
