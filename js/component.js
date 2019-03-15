export default class Component {
  constructor({ element }) {
    this._element = element;
  }

  show() {
    this._element.style.display = '';
  }

  hide() {
    this._element.style.display = 'none';
  }
}
