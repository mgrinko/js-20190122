import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';
import PhonesService from './PhonesService.js';
import Component from './component.js';

export default class PhonesPage extends Component {
  constructor({ element }) {
    super({ element });

    this._state = {
      phones: PhonesService.getAll(),
      selectedPhone: null,
    };

    this._render();
  }

  _initCatalog() {
    this._catalog = new PhonesCatalog({
      element: this._element.querySelector('[data-component="PhonesCatalog"]'),
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
  }

  _initViewer() {
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="PhoneViewer"]'),

      onBack: () => {
        this._setState({ selectedPhone: null });
      }
    });

    this._viewer.hide();
  }

  _initCart() {
    this._cart = new ShoppingCart({
      element: this._element.querySelector('[data-component="ShoppingCart"]'),
    });
  }

  _initFilter() {
    this._filter = new Filter({
      element: this._element.querySelector('[data-component="Filter"]'),
    });
  }

  _updateView() {
    this._viewer.setProps({ phone: this._state.selectedPhone });

    if (this._state.selectedPhone) {
      this._catalog.hide();
      this._viewer.show();
    } else {
      this._catalog.show();
      this._viewer.hide();
    }
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

    this._initCatalog();
    this._initViewer();
    this._initCart();
    this._initFilter();
  }
}
