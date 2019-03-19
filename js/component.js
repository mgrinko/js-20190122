export default class Component {
  constructor(element, props = {}) {
    this._element = element;
    this._props = props;
    this._state = {};

    this._components = {};
  }

  _initComponent(constructor, props) {
    const name = constructor.name;
    const element = this._element.querySelector(`[data-component="${name}"]`);

    this._components[name] = new constructor(element, props);
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
