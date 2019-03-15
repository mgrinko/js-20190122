import Component from '../component.js';

export default class ShoppingCart extends Component {
  constructor({ element }) {
    super({ element });

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <p>Shopping Cart</p>
        <ul>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
        </ul>
      </div>
    `;
  }
}
