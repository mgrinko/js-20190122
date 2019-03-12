export default class Filter {
  constructor({ element }) {
    this._element = element;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div>
        <p>
          Search:
          <input>
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
