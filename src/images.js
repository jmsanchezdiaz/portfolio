import {
  Css3,
  Html,
  Javascript,
  Postgres,
  ReactJS,
  Sass,
  Typescript,
} from './icons';
import RestApp from './static/projects-imgs/RestCountriesApp.jpg';
import FotoLinkedin from './static/projects-imgs/FotoLinkedIn.jpg';
import Gipharg from './static/projects-imgs/GiphargImg.png';
import Aerolab from './static/projects-imgs/AerolabImg.jpg';
import AlkemyChallenge from './static/projects-imgs/AlkemyChallenge.png';

export const technologies = [
  { src: Html, alt: 'html photo', label: 'HTML' },
  { src: Css3, alt: 'css photo', label: 'CSS3' },
  { src: Sass, alt: 'sass photo', label: 'SASS' },
  { src: Javascript, alt: 'javascript photo', label: 'JAVASCRIPT' },
  { src: Typescript, alt: 'typescript photo', label: 'TYPESCRIPT' },
  { src: ReactJS, alt: 'react js photo', label: 'REACT JS' },
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
];

export const projects = [
  {
    src: RestApp,
    repoName: 'rest-countries-app',
    alt: 'rest countries app project',
    projectName: 'REST COUNTRIES APP',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    projectName: 'HEROES APP ALKEMY',
    src: AlkemyChallenge,
    repoName: 'heroes-app-alkemy',
    alt: 'alkemy heroes app project',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
  {
    projectName: 'GIPHARG',
    src: Gipharg,
    repoName: 'gipharg',
    technologiesImgs: [ReactJS, Typescript, Sass],
    alt: 'giphy app project',
  },
  {
    src: Aerolab,
    projectName: 'AEROLAB',
    repoName: 'aerolab-challenge',
    alt: 'products ecommerce aerolab project',
    technologiesImgs: [ReactJS, Typescript, Sass],
  },
];
export const photo = { src: FotoLinkedin, alt: 'foto de mi persona' };
