export default class ShoppingCart {
  constructor({ element }) {
    this._element = element;

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
