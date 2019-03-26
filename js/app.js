import PhonesPage from './PhonesPage.js';
import text from './app.css';

console.log(text);

const appElement = document.querySelector('[data-component="App"]');
const currentPage = new PhonesPage(appElement);
