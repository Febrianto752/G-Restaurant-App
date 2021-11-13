import 'regenerator-runtime'; /* for async await transpile */
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/app-bar';
import './components/article-item';
import './components/restaurant-list';

import img from '../public/images/heros/hero-image_2.jpg';
import App from './views/app';



const app = new App({
  button: document.getElementsByClassName('icon-toggler')[0],
  drawer: {
    nav: document.getElementsByTagName('nav')[0],
    navbarNav: document.getElementsByClassName('navbar-nav')[0]
  },
  content: document.getElementById('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const jumbotron = document.querySelector('.jumbotron');
jumbotron.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`;