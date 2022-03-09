import {
  Css3,
  Html,
  Javascript,
  Postgres,
  ReactJS,
  Sass,
  NextJS,
  ChakraUI,
  Typescript,
} from './icons';
import RestApp from './static/projects-imgs/RestCountriesApp.jpg';
import FotoLinkedin from './static/projects-imgs/FotoLinkedIn.jpg';
import Gipharg from './static/projects-imgs/GiphargImg.png';
import Aerolab from './static/projects-imgs/AerolabImg.jpg';
import BlogPersonal from './static/projects-imgs/blog-personal.png';
import Softvision from './static/projects-imgs/softvision.png';
import AlkemyChallenge from './static/projects-imgs/AlkemyChallenge.png';

export const technologies = [
  { src: Html, alt: 'html photo', label: 'HTML' },
  { src: Css3, alt: 'css photo', label: 'CSS3' },
  { src: Sass, alt: 'sass photo', label: 'SASS' },
  { src: Javascript, alt: 'javascript photo', label: 'JAVASCRIPT' },
  { src: Typescript, alt: 'typescript photo', label: 'TYPESCRIPT' },
  { src: ReactJS, alt: 'react js photo', label: 'REACT.JS' },
  { src: Postgres, alt: 'postgres photo', label: 'POSTGRES SQL' },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    alt: 'jest photo',
    label: 'JEST',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'git photo',
    label: 'GIT',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    alt: 'firebase photo',
    label: 'FIREBASE',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    label: 'NEXT.JS',
    alt: 'next js photo',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/54212428?s=280&v=4',
    label: 'CHAKRA UI',
    alt: 'Chakra ui photo',
  },
];

export const projects = [
  {
    src: RestApp,
    repoName: 'rest-countries-app',
    alt: 'rest countries app project',
    url: 'https://jmsanchezdiaz.github.io/rest-countries-app',
    projectName: 'REST COUNTRIES APP',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    projectName: 'HEROES APP ALKEMY',
    src: AlkemyChallenge,
    repoName: 'heroes-app-alkemy',
    url: 'https://jmsanchezdiaz.github.io/heroes-app-alkemy',
    alt: 'alkemy heroes app project',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    projectName: 'GIPHARG',
    src: Gipharg,
    repoName: 'gipharg',
    url: 'https://jmsanchezdiaz.github.io/gipharg',
    technologiesImgs: [ReactJS, Typescript, Sass],
    alt: 'giphy app project',
  },
  {
    src: Aerolab,
    projectName: 'AEROLAB',
    repoName: 'aerolab-challenge',
    url: 'https://jmsanchezdiaz.github.io/aerolab-challenge',
    alt: 'products ecommerce aerolab project',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    src: Softvision,
    projectName: 'SOFTVISION',
    repoName: 'softvision-challenge',
    url: 'https://jmsanchezdiaz.github.io/softvision-challenge',
    alt: 'products ecommerce aerolab project',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    src: BlogPersonal,
    projectName: 'BLOG PERSONAL',
    repoName: 'aerolab-challenge',
    url: 'https://my-blog-personal.vercel.app/',
    alt: 'products ecommerce aerolab project',
    technologiesImgs: [NextJS, Javascript, ChakraUI],
  },
];
export const photo = { src: FotoLinkedin, alt: 'foto de mi persona' };
