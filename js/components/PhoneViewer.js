import Component from '../component.js';

export default class PhoneViewer extends Component {
  constructor({ element, onBack, onAdd }) {
    super({ element });

    this._props = {
      onBack: onBack,
      onAdd: onAdd,
      phone: null,
    };

    this._state = {
      currentImage: null,
    };

    this.on('click', 'back-button', onBack);
    this.on('click', 'add-button', () => onAdd(this._props.phone.id));
    this.on('click', 'small-image', ({ delegateTarget: image }) => {
      this._setState({
        currentImage: image.src,
      });
    });
  }

  _updateView() {
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
