import memeGenerator from './images/meme-generator.gif';
import todoList from './images/todo-list.gif';
import guessTheColor from './images/guess-the-color.gif';
import mysteryLetter from './images/mystery-letter.gif';
import trybeWarts from './images/trybe-wart.gif';

const HTML = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
const CSS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg';
const JS = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg';
const JEST = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg';
const REACT = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg';
const REDUX = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg';

const trybeFundaments = 'trybe - fundamentos';
const trybeFront = 'trybe - front-end';
const trybeFrontFav = 'trybe - front-end - favoritos';

const data = [{
  name: 'Lessons Learned',
  module: trybeFundaments,
  topics: [HTML, CSS],
  image: 'https://raw.githubusercontent.com/HigorMN/lessons-learned/main/exemplo.png',
  linkWeb: 'https://higormn.github.io/lessons-learned/',
  linkRepository: 'https://github.com/HigorMN/lessons-learned',
}, {
  name: 'Playground Functions',
  module: trybeFundaments,
  topics: [JS],
  image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--C3c-Mxu7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf3ng03oniizb4tehot2.jpg',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/playground-functions',
}, {
  name: 'Arte com Pixels',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/pixels-art/main/art-with-pixels.gif',
  linkWeb: 'https://higormn.github.io/pixels-art/',
  linkRepository: 'https://github.com/HigorMN/pixels-art',
}, {
  name: 'Meme Generator',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: memeGenerator,
  linkWeb: 'https://higormn.github.io/meme-generator/',
  linkRepository: 'https://github.com/HigorMN/meme-generator',
}, {
  name: 'Lista de Tarefas',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: todoList,
  linkWeb: 'https://higormn.github.io/todo-list/',
  linkRepository: 'https://github.com/HigorMN/todo-list',
}, {
  name: 'Adivinhe a cor',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: guessTheColor,
  linkWeb: 'https://higormn.github.io/color-guess/',
  linkRepository: 'https://github.com/HigorMN/color-guess',
}, {
  name: 'Carta Misteriosa',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: mysteryLetter,
  linkWeb: 'https://github.com/HigorMN/carta-misteriosa',
  linkRepository: 'https://higormn.github.io/carta-misteriosa/',
}, {
  name: 'Trybewarts',
  module: trybeFundaments,
  topics: [HTML, CSS, JS],
  image: trybeWarts,
  linkWeb: 'https://higormn.github.io/trybewarts/',
  linkRepository: 'https://github.com/HigorMN/trybewarts',
}, {
  name: 'Teste Unitários',
  module: trybeFundaments,
  topics: [JEST, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/js-unit-tests/main/js-unit-test.png',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/js-unit-tests',
}, {
  name: 'Zoo Functions',
  module: trybeFundaments,
  topics: [JEST, JS],
  image: 'https://raw.githubusercontent.com/HigorMN/zoo-functions/main/zoo-functions.png',
  linkWeb: 'https://',
  linkRepository: 'https://github.com/HigorMN/zoo-functions',
}, {
  name: 'Carrinho de Compras',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS],
  image: 'https://img.freepik.com/fotos-premium/carrinho-de-compras-desfocado-no-fundo-do-supermercado_36078-696.jpg',
  linkWeb: 'https://higormn.github.io/shopping-cart/',
  linkRepository: 'https://github.com/HigorMN/shopping-cart',
}, {
  name: 'Sistema Solar',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/03/planeta-sistema-solar.jpg',
  linkWeb: 'https://higormn.github.io/solar-system/',
  linkRepository: 'https://github.com/HigorMN/solar-system',
}, {
  name: 'Tryunfo',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://t2.tudocdn.net/560502?w=1920',
  linkWeb: 'https://higormn.github.io/tryunfo/',
  linkRepository: 'https://github.com/HigorMN/tryunfo',
}, {
  name: 'Front-End Online Store',
  module: trybeFrontFav,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/online-buying-1625209658854.png',
  linkWeb: 'https://higormn.github.io/frontend-online-store/',
  linkRepository: 'https://github.com/HigorMN/frontend-online-store',
}, {
  name: 'Trybewallet',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT, REDUX],
  image: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/01/planilha-de-controle-financeiro.jpg',
  linkWeb: 'https://higormn.github.io/trybewallet/',
  linkRepository: 'https://github.com/HigorMN/trybewallet',
}, {
  name: 'Trivia',
  module: trybeFrontFav,
  topics: [HTML, CSS, JEST, JS, REACT, REDUX],
  image: 'https://wallpapercave.com/wp/wp9677222.jpg',
  linkWeb: 'https://higormn.github.io/trivia/',
  linkRepository: 'https://github.com/HigorMN/trivia',
}, {
  name: 'StarWars Planets Search',
  module: trybeFront,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'https://github.com/HigorMN/starwars-planets-search/raw/main/projectIntro.gif',
  linkWeb: 'https://higormn.github.io/starwars-planets-search/',
  linkRepository: 'https://github.com/HigorMN/starwars-planets-search',
}, {
  name: 'App de receitas',
  module: trybeFrontFav,
  topics: [HTML, CSS, JEST, JS, REACT],
  image: 'http://s2.glbimg.com/pkOw6LCsnK72qwmKmozdovs72JM=/620x455/e.glbimg.com/og/ed/f/original/2017/01/11/livro_de_receita.jpg',
  linkWeb: 'https://higormn.github.io/app-recipes/',
  linkRepository: 'https://github.com/HigorMN/app-recipes',
}];

export default data;
