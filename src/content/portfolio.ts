export type Project = {
  id: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  engineering: string;
  stack: readonly string[];
  repositoryUrl: string;
  liveUrl?: string;
};

export type StackGroup = {
  title: string;
  description: string;
  technologies: readonly string[];
};

export const navigation = [
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre', href: '#sobre' },
] as const;

export const proofPoints = [
  { value: '4+', label: 'anos em produtos web' },
  { value: 'SaaS · ERP', label: 'contextos de negócio' },
  { value: 'Front → Back', label: 'visão ponta a ponta' },
] as const;

export const projects: readonly Project[] = [
  {
    id: 'tfc',
    category: 'Backend · Integração',
    title: 'Trybe Futebol Clube',
    summary:
      'API para autenticação, partidas e classificação integrada a um frontend existente.',
    challenge:
      'Traduzir regras de negócio do futebol em endpoints e rankings consistentes.',
    engineering:
      'Arquitetura em camadas, desenvolvimento orientado a testes, autenticação e ambiente integrado com Docker Compose.',
    stack: ['Node.js', 'TypeScript', 'Sequelize', 'MySQL', 'Docker', 'Mocha'],
    repositoryUrl: 'https://github.com/HigorMN/trybe-futebol-clube',
  },
  {
    id: 'car-shop',
    category: 'API · Modelagem de domínio',
    title: 'Car Shop',
    summary: 'API tipada para gerenciar carros e motos em uma concessionária.',
    challenge:
      'Representar um domínio com entidades relacionadas sem perder extensibilidade ou segurança de tipos.',
    engineering:
      'POO, interfaces, composição e arquitetura MSC conectadas ao MongoDB por meio do Mongoose.',
    stack: ['TypeScript', 'Node.js', 'MongoDB', 'Mongoose', 'Docker'],
    repositoryUrl: 'https://github.com/HigorMN/car-shop',
  },
  {
    id: 'recipes',
    category: 'Frontend · Mobile first',
    title: 'App de Receitas',
    summary:
      'Experiência mobile para descobrir, favoritar e acompanhar o preparo de comidas e bebidas.',
    challenge:
      'Organizar diferentes jornadas e fontes de dados em uma interface simples para uso recorrente.',
    engineering:
      'Componentes funcionais, Context API, estado compartilhado, hooks customizados e integração com duas APIs externas.',
    stack: ['React', 'JavaScript', 'Context API', 'Hooks', 'CSS'],
    repositoryUrl: 'https://github.com/HigorMN/app-recipes',
    liveUrl: 'https://higormn.github.io/app-recipes/',
  },
] as const;

export const principles = [
  {
    number: '01',
    title: 'Entender antes de desenhar',
    description:
      'Começo pelo fluxo, pelas regras e por quem usa. A interface vem depois do contexto.',
  },
  {
    number: '02',
    title: 'Clareza em cada camada',
    description:
      'Componentes, estados e contratos devem revelar intenção — não exigir adivinhação.',
  },
  {
    number: '03',
    title: 'Construir para evoluir',
    description:
      'Reuso, testes e decisões simples mantêm o produto saudável conforme ele cresce.',
  },
  {
    number: '04',
    title: 'Refinar com propósito',
    description:
      'Performance, acessibilidade e detalhes de UX fazem parte da entrega, não do acabamento.',
  },
] as const;

export const stackGroups: readonly StackGroup[] = [
  {
    title: 'Interfaces',
    description: 'Produtos web claros, responsivos e consistentes.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'Mantine UI',
      'Ant Design',
    ],
  },
  {
    title: 'Estado e formulários',
    description: 'Fluxos previsíveis, validação explícita e menos atrito.',
    technologies: ['React Hook Form', 'Zod', 'Zustand', 'Redux'],
  },
  {
    title: 'Backend e dados',
    description: 'Integrações e regras de negócio com contratos bem definidos.',
    technologies: [
      'Node.js',
      '.NET / C#',
      'REST APIs',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    title: 'Engenharia e entrega',
    description: 'Qualidade contínua do código à produção.',
    technologies: [
      'Testes',
      'Git',
      'Docker',
      'CI/CD',
      'AWS',
      'Azure',
      'Acessibilidade',
      'Performance',
    ],
  },
] as const;

export const contactLinks = [
  {
    label: 'E-mail',
    value: 'higor.maranhao2000@gmail.com',
    href: 'mailto:higor.maranhao2000@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: '/in/higor-maranhao',
    href: 'https://www.linkedin.com/in/higor-maranhao/',
  },
  {
    label: 'GitHub',
    value: '@HigorMN',
    href: 'https://github.com/HigorMN',
  },
] as const;
