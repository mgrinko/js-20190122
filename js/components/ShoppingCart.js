import Component from '../component.js';

export default class ShoppingCart extends Component {
  constructor({ element }) {
    super({ element });

    this._state = {
      items: [],
    };

    this._render();
  }

  _setState(partial) {
    this._state = {
      ...this._state,
      ...partial,
    };

    this._updateView();
  }

  add(itemId) {
    this._setState({
      items: [...this._state.items, itemId ],
    });
  }

  _updateView() {
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
