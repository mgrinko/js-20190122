import Component from '../component.js';

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this.on('click', 'remove-button', ({ delegateTarget: removeButton }) => {
      this._props.onRemove(removeButton.dataset.item);
    });

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <p>Shopping Cart</p>
        <ul>
          ${ this._props.items.map(item => `
            <li>
              <span>${item}</span>
              <button
                data-element="remove-button"
                data-item="${item}"
              >
                X
              </button>
            </li>
            
          `).join('')}
        </ul>
      </div>
    `;
  }
}
