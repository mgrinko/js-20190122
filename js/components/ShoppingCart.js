import Component from '../component.js';

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this._state = {
      items: [],
    };

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <p>Shopping Cart</p>
        <ul>
          ${ this._state.items.map(item => `
            <li>
              <span>${item}</span>
              <button>X</button>
            </li>
            
          `).join('')}
        </ul>
      </div>
    `;
  }
}
