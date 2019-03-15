export default class Component {
  constructor({ element }) {
    this._element = element;
    this._state = {};
    this._props = {};
  }

  show() {
    this._element.style.display = '';
  }

  hide() {
    this._element.style.display = 'none';
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

    this._updateView();
  }

  _setState(partial) {
    this._state = {
      ...this._state,
      ...partial,
    };

    this._updateView();
  }
}
