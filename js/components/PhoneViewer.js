import Component from '../component.js';

export default class PhoneViewer extends Component {
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
