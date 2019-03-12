import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';


export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    new PhonesCatalog({
      element: this._element.querySelector('PhonesCatalog'),
    });

    new PhoneViewer({
      element: this._element.querySelector('PhoneViewer'),
    });

    new ShoppingCart({
      element: this._element.querySelector('ShoppingCart'),
    });

    new Filter({
      element: this._element.querySelector('Filter'),
    });
  }

  _render() {
    this._element.innerHTML = `
      <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <Filter></Filter>
          </section>
  
          <section>
            <ShoppingCart></ShoppingCart>
          </section>
        </div>
  
        <!--Main content-->
        <div class="col-md-10">
          <PhonesCatalog></PhonesCatalog>
          <PhoneViewer></PhoneViewer>
        </div>
      </div>
    `;
  }
}
