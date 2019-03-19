

const PhonesService = {
  getAll({ onSuccess, onError = () => {} }) {
    const API_URL = 'https://mgrinko.github.io/js-20190122/api/phones.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        onSuccess(JSON.parse(xhr.responseText));
      } else {
        onError(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
      }
    };
  },

  getById({ phoneId, onSuccess, onError = () => {} }) {
    const API_URL = `https://mgrinko.github.io/js-20190122/api/phones/${phoneId}.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        onSuccess(JSON.parse(xhr.responseText));
      } else {
        onError(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
      }
    };
  }
};

export default PhonesService;
