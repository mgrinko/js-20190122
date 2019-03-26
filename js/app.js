import PhonesPage from './PhonesPage.js';
import './app.css';

const appElement = document.querySelector('[data-component="App"]');
const currentPage = new PhonesPage(appElement);
