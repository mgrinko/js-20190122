export default class Component {
  constructor(element, props = {}) {
    this._element = element;
    this._props = props;
    this._state = {};

    this._components = {};
  }

  _initComponent(componentConstructor, props) {
    const name = componentConstructor.name;
    const element = this._element.querySelector(`[data-component="${name}"]`);
    const currentInstance = this._components[name];

    if (!element) {
      this._components[name] = null;
      return;
    }

    if (currentInstance) {
      element.parentNode.replaceChild(currentInstance._element, element);
      currentInstance.setProps(props);
    } else {
      this._components[name] = new componentConstructor(element, props);
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
