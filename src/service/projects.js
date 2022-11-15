import lessonsLearned from './images/lessons-learned.png';
import PlaygroundFunctions from './images/Playground-Functions.png';

const HTML = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
const CSS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg';
const JS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg';

const data = [{
  name: 'Lessons Learned',
  module: 'trybe - fundamentos',
  topics: [HTML, CSS],
  image: lessonsLearned,
  linkWeb: 'https://higormn.github.io/lessons-learned/',
  linkRepository: 'https://github.com/HigorMN/lessons-learned',
}, {
  name: 'Playground Functions',
  module: 'trybe - fundamentos',
  topics: [JS],
  image: PlaygroundFunctions,
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/playground-functions',
}];

export default data;
