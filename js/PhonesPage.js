import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';
import PhonesService from './PhonesService.js';


export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    new PhonesCatalog({
      element: this._element.querySelector('[data-component="PhonesCatalog"]'),
      phones: PhonesService.getAll(),
    });

    new PhoneViewer({
      element: this._element.querySelector('[data-component="PhoneViewer"]'),
    });

    new ShoppingCart({
      element: this._element.querySelector('[data-component="ShoppingCart"]'),
    });

    new Filter({
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
          <div data-component="PhonesCatalog"></div>
          <div data-component="PhoneViewer" hidden></div>
        </div>
      </div>
    `;
  }
}
