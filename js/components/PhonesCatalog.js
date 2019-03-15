import Component from '../component.js';

export default class PhonesCatalog extends Component {
  constructor({ element, phones, onPhoneSelected, onAdd }) {
    super({ element });

    this._props = {
      phones: phones,
      onPhoneSelected: onPhoneSelected,
      onAdd: onAdd,
    };

    this._render();
    this._initEventListeners();
  }

  _initEventListeners() {
    this.on('click', 'add-button', (event) => {
      const detailsLink = event.delegateTarget;
      this._props.onPhoneSelected(detailsLink.dataset.phoneId);
    });

    this.on('click', 'add-button', (event) => {
      const addButton = event.delegateTarget;
      this._props.onAdd(addButton.dataset.phoneId);
    });
  }

  on(eventName, elementName, callback) {
    this._element.addEventListener(eventName, (event) => {
      const delegateTarget = event.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) {
        return;
      }

      event.delegateTarget = delegateTarget;

      callback(event);
    });
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._props.phones.map(phone => `
        
          <li class="thumbnail">
            <a
              data-element="details-link"
              data-phone-id="${phone.id}"
              href="#!/phones/${phone.id}"
              class="thumb"
            >
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a
                data-element="add-button"
                data-phone-id="${phone.id}"
                class="btn btn-success"
              >
                Add
              </a>
            </div>
  
            <a
              data-element="details-link"
              data-phone-id="${phone.id}"
              href="#!/phones/${phone.id}"
            >
              ${phone.name}
            </a>
            
            <p>${phone.snippet}</p>
          </li>
        
        `).join('') }
      </ul>
    `;
  }
}




