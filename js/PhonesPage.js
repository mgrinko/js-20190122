import Component from './component.js';

import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';

import PhonesService from './PhonesService.js';

export default class PhonesPage extends Component {
  constructor(element, props) {
    super(element, props);

    this._state = {
      phones: [],
      selectedPhone: null,
      items: [],
    };

    this.setSelectedPhone = this.setSelectedPhone.bind(this);
    this.clearSelectedPhone = this.clearSelectedPhone.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this._render();

    PhonesService.getAll({
      onSuccess: (phones) => {
        this._setState({ phones: phones })
      },
      onError: (errorMessage) => {
        console.error(errorMessage);
      }
    });
  }

  _render() {
    this._element.innerHTML = `
      <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <div data-component="Filter"></div>
          </section>
  
          <section>
            <div data-component="ShoppingCart"></div>
          </section>
        </div>
  
        <!--Main content-->
        <div class="col-md-10">
          ${ this._state.selectedPhone ? `
            <div data-component="PhoneViewer"></div>
          ` : `
            <div data-component="PhonesCatalog"></div>
          `}
        </div>
      </div>
    `;

    this._initComponent(PhonesCatalog, {
      phones: this._state.phones,
      onPhoneSelected: this.setSelectedPhone,
      onAdd: this.addItem,
    });

    this._initComponent(PhoneViewer, {
      phone: this._state.selectedPhone,
      onBack: this.clearSelectedPhone,
      onAdd: this.addItem,
    });

    this._initComponent(ShoppingCart, {
      items: this._state.items,
      onRemove: this.removeItem,
    });

    this._initComponent(Filter);
  }

  setSelectedPhone(phoneId) {
    PhonesService.getById({
      phoneId: phoneId,

      onSuccess: (phoneDetails) => {
        this._setState({
          selectedPhone: phoneDetails,
        });
      }
    });
  };

  clearSelectedPhone() {
    this._setState({ selectedPhone: null });
  }

  addItem(phoneId) {
    this._setState({
      items: [ ...this._state.items, phoneId],
    });
  }

  removeItem(itemToRemove) {
    this._setState({
      items: this._state.items.filter(
        item => item !== itemToRemove
      ),
    });
  }
}
