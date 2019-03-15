export default class PhoneViewer {
  constructor({ element, onBack }) {
    this._element = element;

    this._props = {
      onBack: onBack,
      phone: null,
    };

    this._initEventListeners();
  }

  _initEventListeners() {
    this._element.addEventListener('click', (event) => {
      const backButton = event.target.closest('[data-element="back-button"]');

      if (!backButton) {
        return;
      }

      this._props.onBack();
    });
  }

  show(phone) {
    this._props.phone = phone;
    this._element.hidden = false;
    this._render();
  }

  hide() {
    this._element.hidden = true;
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
    
        <button data-element="back-button">Back</button>
        <button>Add to basket</button>
    
    
        <h1>Motorola XOOM™ with Wi-Fi</h1>
    
        <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>
    
        <ul class="phone-thumbs">
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
          </li>
        </ul>
      </div>
    `;
  }
}
