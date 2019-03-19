import Component from '../component.js';

export default class Filter extends Component {
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
