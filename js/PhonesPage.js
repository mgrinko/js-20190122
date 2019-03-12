import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';
import PhonesService from './PhonesService.js';


export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._state = {
      phones: PhonesService.getAll(),
      selectedPhone: null,
    };

    this._render();

    this._initCatalog();
    this._initCart();
    this._initFilter();
  }

  _initCatalog() {
    this._catalog = new PhonesCatalog({
      element: this._element.querySelector('[data-component="PhonesCatalog"]'),
      phones: this._state.phones,

      onPhoneSelected: (phoneId) => {
        const selectedPhone = PhonesService.getById(phoneId);

        this._state.selectedPhone = selectedPhone;

        this._render();
        this._initViewer();
        this._initCart();
        this._initFilter();
      },
    });
  }

  _initViewer() {
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="PhoneViewer"]'),
    });
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
  }
}
