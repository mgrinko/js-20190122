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
          <div data-component="PhonesCatalog"></div>
          <div data-component="PhoneViewer"></div>
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
        this._cart.add(phoneId);
      },
    });

    this._initComponent(PhoneViewer, {
      onBack: () => {
        this._setState({ selectedPhone: null });
      },

      onAdd: (phoneId) => {
        this._cart.add(phoneId);
      },
    });

    this._initComponent(ShoppingCart);
    this._initComponent(Filter);
  }
}
