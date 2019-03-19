

const PhonesService = {
  getAll() {
    const API_URL = 'https://mgrinko.github.io/js-20190122/api/phones.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, false);
    xhr.send();

    if (xhr.status !== 200) {
      console.error(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
      return [];
    }

    return JSON.parse(xhr.responseText);
  },

  getById(phoneId) {
    const API_URL = `https://mgrinko.github.io/js-20190122/api/phones/${phoneId}.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, false);
    xhr.send();

    if (xhr.status !== 200) {
      console.error(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
      return {};
    }

    return JSON.parse(xhr.responseText);
  }
};

export default PhonesService;
