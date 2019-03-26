/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const appElement = document.querySelector('[data-component="App"]');

const currentPage = new _PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__["default"](appElement);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesPage; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _components_ShoppingCart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_Filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _PhonesService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);









class PhonesPage extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this._state = {
      isLoaded: false,
      phones: [],
      selectedPhone: null,
      items: [],
    };

    this.setSelectedPhone = this.setSelectedPhone.bind(this);
    this.clearSelectedPhone = this.clearSelectedPhone.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this._render();

    this._loadPhones();
  }

  async _loadPhones() {
    const phones = await _PhonesService_js__WEBPACK_IMPORTED_MODULE_5__["default"].getAll()
      .catch(() => []);

    this._setState({
      phones: phones,
      isLoaded: true,
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
            ${ this._state.isLoaded ? `
              <div data-component="PhonesCatalog"></div>
            ` : `
              <p>Loading ...</p>
            `}
          `}
        </div>
      </div>
    `;

    this._initComponent(_components_PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      phones: this._state.phones,
      onPhoneSelected: this.setSelectedPhone,
      onAdd: this.addItem,
    });

    this._initComponent(_components_PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      phone: this._state.selectedPhone,
      onBack: this.clearSelectedPhone,
      onAdd: this.addItem,
    });

    this._initComponent(_components_ShoppingCart_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: this._state.items,
      onRemove: this.removeItem,
    });

    this._initComponent(_components_Filter_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

  async setSelectedPhone(phoneId) {
    const phoneDetails = await _PhonesService_js__WEBPACK_IMPORTED_MODULE_5__["default"].getById(phoneId);

    this._setState({
      selectedPhone: phoneDetails,
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
class Component {
  constructor(element, props = {}) {
    this._element = element;
    this._props = props;
    this._state = {};

    this._components = {};
  }

  _initComponent(componentConstructor, props = {}) {
    const name = componentConstructor.name;
    const element = this._element.querySelector(`[data-component="${name}"]`);
    const currentInstance = this._components[name];

    if (!element) {
      this._components[name] = null;
      return;
    }

    if (!currentInstance) {
      this._components[name] = new componentConstructor(element, props);
      return;
    }

    element.parentNode.replaceChild(currentInstance._element, element);

    if (!_.isEqual(props, currentInstance._props)) {
      currentInstance.setProps(props);
    }
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

  setProps(partial) {
    this._props = {
      ...this._props,
      ...partial,
    };

    this._render();
  }

  _setState(partial) {
    this._state = {
      ...this._state,
      ...partial,
    };

    this._render();
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesCatalog; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class PhonesCatalog extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this._initEventListeners();

    this._render();
  }

  _initEventListeners() {
    this.on('click', 'details-link', ({ delegateTarget: detailsLink }) => {
      this._props.onPhoneSelected(detailsLink.dataset.phoneId);
    });

    this.on('click', 'add-button', ({ delegateTarget: addButton }) => {
      this._props.onAdd(addButton.dataset.phoneId);
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






/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneViewer; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class PhoneViewer extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this._state = {
      currentImage: null,
    };

    this.on('click', 'back-button', this._props.onBack);
    this.on('click', 'add-button', () => this._props.onAdd(this._props.phone.id));
    this.on('click', 'small-image', ({ delegateTarget: image }) => {
      this._setState({
        currentImage: image.src,
      });
    });

    this._render();
  }

  _render() {
    const { phone } = this._props;
    const { currentImage } = this._state;

    if (!this._props.phone) {
      this._element.innerHTML = '';
      return;
    }

    this._element.innerHTML = `
      <div>
        ${ currentImage ? `
          <img class="phone" src="${ currentImage }">
        ` : ''}
    
        <button data-element="back-button">Back</button>
        <button data-element="add-button">Add to basket</button>
    
        <h1>${ phone.name }</h1>
        <p>${ phone.description }</p>
            
        <ul class="phone-thumbs">
          ${ phone.images.map(imageUrl => `
            <li>
              <img data-element="small-image" src="${imageUrl}">
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShoppingCart; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class ShoppingCart extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Filter extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this._state = {
      value: '',
    };

    this.on('change', 'query', ({ delegateTarget }) => {
      this._setState({
        value: delegateTarget.value,
      });
    });

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <p>
          Search:
          <input
            data-element="query"
            value="${this._state.value}"
          >
        </p>

        <p>
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </div>
    `;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_URL = 'https://mgrinko.github.io/js-20190122/api';
// const API_URL = 'http://127.0.0.1:8080/api';

const PhonesService = {
  getAll() {
    return this._sendRequest('/phones');
  },

  getById(phoneId) {
    return this._sendRequest(`/phones/${phoneId}`);
  },

  async _sendRequest(url) {
    const response = await fetch(API_URL + url + '.json');
    const data = await response.json();

    return data;

    return fetch(url)
      .then(response => response.json());

    return new Promise((resolve, reject) => {
      const fullUrl = `${API_URL}${url}.json`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fullUrl, true);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
        }
      };
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PhonesService);


/***/ })
/******/ ]);