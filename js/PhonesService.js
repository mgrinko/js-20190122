

const PhonesService = {
  getAll({ onSuccess, onError }) {
    this._sendRequest('/phones', onSuccess, onError);
  },

  getById({ phoneId, onSuccess, onError = () => {} }) {
    this._sendRequest(`/phones/${phoneId}`, onSuccess, onError);
  },

  _sendRequest(url, onSuccess, onError = () => {}) {
    const fullUrl = `https://mgrinko.github.io/js-20190122/api${url}.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fullUrl, true);
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
