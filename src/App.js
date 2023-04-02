import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimationProvider from './context/animationContext/Provider';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AnimationProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </AnimationProvider>
    </BrowserRouter>
  );
}

export default App;
