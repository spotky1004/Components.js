import ComponentBase from "../src/ComponentBase.js";
import ElementBuilder from "../src/ElementBuilder.js";
import updateProperty from "../src/updateProperty.js";

/**
 * @typedef ExtraOptions
 * @property {string} defaultValue
 */
/**
 * @typedef {Omit<import("../src/ComponentBase.js").ComponentBaseOptions, "defaultValue"> & ExtraOptions} Options
 */

const elementBuilder = new ElementBuilder(/** @type {const} */ ({
  type: "div",
  cacheAs: "wrapper",
  classNames: "component__value",
  childs: [
    {
      type: "span",
      cacheAs: "name",
      classNames: "component__value__name",
    },
    {
      type: "span",
      cacheAs: "value",
      classNames: "component__value__value"
    }
  ]
}));

/**
 * @extends {ComponentBase<Options["defaultValue"], Options>}
 */
class Value extends ComponentBase {
  /**
   * @param {Options} options 
   */
  constructor(options) {
    super(options);
    const { element, cache } = elementBuilder.clone();
    /** @type {typeof element} */
    this.element = element;
    /** @type {typeof cache} */
    this.cache = cache;
    this.init();
  }

  set value(value) {
    this._value = value;
    this.render();
  }

  /**
   * @returns {Options["defaultValue"]}
   */
  get value() {
    return String(this._value ?? "");
  }

  render() {
    updateProperty(this.cache.name, "innerText", this.name);
    updateProperty(this.cache.value, "innerText", this.value ?? "");
  }

  /**
   * @returns {Value}
   */
  clone() {
    return new Value(this.rawOptions);
  }
}

export default Value;
