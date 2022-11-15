import lessonsLearned from './images/lessons-learned.png';
import PlaygroundFunctions from './images/Playground-Functions.png';
import pixelArt from './images/pixel-art.png';
import memeGenerator from './images/meme-generator.gif';
import todoList from './images/todo-list.gif';
import guessTheColor from './images/guess-the-color.gif';
import misteryLetter from './images/mistery-letter.gif';

const HTML = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
const CSS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg';
const JS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg';

const trybeFundamentos = 'trybe - fundamentos';

const data = [{
  name: 'Lessons Learned',
  module: trybeFundamentos,
  topics: [HTML, CSS],
  image: lessonsLearned,
  linkWeb: 'https://higormn.github.io/lessons-learned/',
  linkRepository: 'https://github.com/HigorMN/lessons-learned',
}, {
  name: 'Playground Functions',
  module: trybeFundamentos,
  topics: [JS],
  image: PlaygroundFunctions,
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/playground-functions',
}, {
  name: 'Arte com Pixels',
  module: trybeFundamentos,
  topics: [HTML, CSS, JS],
  image: pixelArt,
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
}];

export default data;
