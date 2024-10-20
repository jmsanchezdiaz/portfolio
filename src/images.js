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
  Bootstrap,
  Cypress,
  MUI,
  Rails,
  Ruby,
  Git,
  Jest,
  GraphQL
} from "./icons";
import RestApp from "./static/projects-imgs/RestCountriesApp.jpg";
import FotoLinkedin from "./static/projects-imgs/FotoLinkedIn.webp";
import Gipharg from "./static/projects-imgs/GiphargImg.png";
import Aerolab from "./static/projects-imgs/AerolabImg.jpg";
import BlogPersonal from "./static/projects-imgs/blog-personal.png";
import MeliDetails from "./static/projects-imgs/mercadolibre.png";
import AlkemyChallenge from "./static/projects-imgs/AlkemyChallenge.png";

export const technologies = [
  { src: Html, alt: "html photo", label: "HTML" },
  { src: Css3, alt: "css photo", label: "CSS3" },
  { src: Sass, alt: "sass photo", label: "SASS" },
  { src: Javascript, alt: "javascript photo", label: "JAVASCRIPT" },
  { src: Typescript, alt: "typescript photo", label: "TYPESCRIPT" },
  { src: ReactJS, alt: "react js photo", label: "REACT.JS" },
  { src: Postgres, alt: "postgres photo", label: "POSTGRES SQL" },
  {
    src: Jest,
    alt: "jest photo",
    label: "JEST"
  },
  {
    src: Git,
    alt: "git photo",
    label: "GIT"
  },

  {
    src: NextJS,
    label: "NEXT.JS",
    alt: "next js photo"
  },

  { src: Cypress, label: "CYPRESS", alt: "Cypress photo" },
  { src: MUI, label: "MATERIAL UI", alt: "Material ui photo" },
  { src: Ruby, label: "RUBY", alt: "Ruby photo" },
  { src: Rails, label: "RAILS", alt: "Rails photo" },
  { src: GraphQL, label: "GraphQL", alt: "GraphQL photo" }
];

export const projects = [
  {
    src: RestApp,
    repoName: "rest-countries-app",
    alt: "rest countries app project",
    url: "https://jmsanchezdiaz.github.io/rest-countries-app",
    projectName: "REST COUNTRIES APP",
    technologiesImgs: [ReactJS, Typescript, Sass]
  },
  {
    projectName: "HEROES APP ALKEMY",
    src: AlkemyChallenge,
    repoName: "heroes-app-alkemy",
    url: "https://jmsanchezdiaz.github.io/heroes-app-alkemy",
    alt: "alkemy heroes app project",
    technologiesImgs: [ReactJS, Typescript, Bootstrap]
  },
  {
    projectName: "GIPHARG",
    src: Gipharg,
    repoName: "gipharg",
    url: "https://jmsanchezdiaz.github.io/gipharg",
    technologiesImgs: [ReactJS, Typescript, Sass],
    alt: "giphy app project"
  },
  {
    src: Aerolab,
    projectName: "AEROLAB",
    repoName: "aerolab-challenge",
    url: "https://jmsanchezdiaz.github.io/aerolab-challenge",
    alt: "products ecommerce aerolab project",
    technologiesImgs: [ReactJS, Typescript, Sass]
  },

  {
    src: BlogPersonal,
    projectName: "BLOG PERSONAL",
    repoName: "aerolab-challenge",
    url: "https://my-blog-personal.vercel.app/",
    alt: "products ecommerce aerolab project",
    technologiesImgs: [NextJS, Javascript, ChakraUI]
  },
  {
    src: MeliDetails,
    projectName: "Mercado Libre Challenge",
    repoName: "meli-details-challenge",
    url: "https://meli-details-challenge.vercel.app/productId",
    alt: "challenge de pagina de producto mercado libre",
    technologiesImgs: [ReactJS, Typescript, ChakraUI]
  }
];
export const photo = { src: FotoLinkedin, alt: "foto de mi persona" };
