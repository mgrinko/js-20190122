import PhonesPage from './PhonesPage.js';

try {
  JSON.parse('sdfsdfs  sd fsd f');
} catch (error) {
  console.log(error);
}

const appElement = document.querySelector('[data-component="App"]');

const currentPage = new PhonesPage(appElement);
