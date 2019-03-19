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
      phones: PhonesService.getAll(),
      selectedPhone: null,
      items: [],
    };

    this._render();
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

      onPhoneSelected: (phoneId) => {
        this._setState({
          selectedPhone: PhonesService.getById(phoneId),
        });
      },

      onAdd: (phoneId) => {
        this._setState({
          items: [ ...this._state.items, phoneId],
        });
      },
    });

    this._initComponent(PhoneViewer, {
      phone: this._state.selectedPhone,

      onBack: () => {
        this._setState({ selectedPhone: null });
      },

      onAdd: (phoneId) => {
        this._setState({
          items: [ ...this._state.items, phoneId],
        });
      },
    });

    this._initComponent(ShoppingCart, {
      items: this._state.items,
    });

    this._initComponent(Filter);
  }
}
