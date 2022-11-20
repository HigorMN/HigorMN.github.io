import memeGenerator from './images/meme-generator.gif';
import todoList from './images/todo-list.gif';
import guessTheColor from './images/guess-the-color.gif';
import misteryLetter from './images/mistery-letter.gif';
import trybewarts from './images/trybewarts.gif';

const HTML = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
const CSS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg';
const JS = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg';
const JEST = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg';
const REACT = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg';

const trybeFundamentos = 'trybe - fundamentos';
const trybeFront = 'trybe - front-end';
const trybeFrontFav = 'trybe - front-end - favoritos';

const data = [{
  name: 'Lessons Learned',
  module: trybeFundamentos,
  topics: [HTML, CSS],
  image: 'https://raw.githubusercontent.com/HigorMN/lessons-learned/main/exemplo.png',
  linkWeb: 'https://higormn.github.io/lessons-learned/',
  linkRepository: 'https://github.com/HigorMN/lessons-learned',
}, {
  name: 'Playground Functions',
  module: trybeFundamentos,
  topics: [JS],
  image: 'https://raw.githubusercontent.com/HigorMN/playground-functions/main/playground-functions.png',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/playground-functions',
}, {
  name: 'Arte com Pixels',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/pixels-art/main/art-with-pixels.gif',
  linkWeb: 'https://higormn.github.io/pixels-art/',
  linkRepository: 'https://github.com/HigorMN/pixels-art',
}, {
  name: 'Meme Generator',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: memeGenerator,
  linkWeb: 'https://higormn.github.io/meme-generator/',
  linkRepository: 'https://github.com/HigorMN/meme-generator',
}, {
  name: 'Lista de Tarefas',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: todoList,
  linkWeb: 'https://higormn.github.io/todo-list/',
  linkRepository: 'https://github.com/HigorMN/todo-list',
}, {
  name: 'Adivinhe a cor',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: guessTheColor,
  linkWeb: 'https://higormn.github.io/color-guess/',
  linkRepository: 'https://github.com/HigorMN/color-guess',
}, {
  name: 'Carta Misteriosa',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: misteryLetter,
  linkWeb: 'https://github.com/HigorMN/carta-misteriosa',
  linkRepository: 'https://higormn.github.io/carta-misteriosa/',
}, {
  name: 'Trybewarts',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: trybewarts,
  linkWeb: 'https://higormn.github.io/trybewarts/',
  linkRepository: 'https://github.com/HigorMN/trybewarts',
}, {
  name: 'Teste Unitários',
  module: trybeFundamentos,
  topics: [JEST, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/js-unit-tests/main/js-unit-test.png',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/js-unit-tests',
}, {
  name: 'Zoo Functions',
  module: trybeFundamentos,
  topics: [JEST, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/zoo-functions/main/zoo-functions.png',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/zoo-functions',
}, {
  name: 'Carrinho de Compras',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/shopping-cart/main/prototipo.gif',
  linkWeb: 'https://higormn.github.io/shopping-cart/',
  linkRepository: 'https://github.com/HigorMN/shopping-cart',
}, {
  name: 'Sistema Solar',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://raw.githubusercontent.com/HigorMN/solar-system/main/solar-system.png',
  linkWeb: 'https://higormn.github.io/solar-system/',
  linkRepository: 'https://github.com/HigorMN/solar-system',
}, {
  name: 'Tryunfo',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://github.com/HigorMN/tryunfo/raw/main/tryunfo.png',
  linkWeb: 'https://higormn.github.io/tryunfo/',
  linkRepository: 'https://github.com/HigorMN/tryunfo',
}, {
  name: 'Front-End Online Store',
  module: trybeFrontFav,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://github.com/HigorMN/frontend-online-store/raw/main/front-end-online-store.png',
  linkWeb: 'https://higormn.github.io/frontend-online-store/',
  linkRepository: 'https://github.com/HigorMN/frontend-online-store',
}];

export default data;
