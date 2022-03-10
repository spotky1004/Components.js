import Input from "./Components/Input.js";
import Select from "./Components/Select.js";
import FormBundle from "./Components/FormBundle.js";
import Value from "./Components/Value.js";

/** @type {HTMLDivElement} */
const main = document.getElementById("main");

const valueInput = new FormBundle(/** @type {const} */ ({
  forms: {
    type: new Select({
      name: "Type:",
      defaultValue: 2,
      options: [
        "number",
        "integer",
        "string",
        "boolean",
      ]
    }),
    value: new Input({
      name: "Value:",
      hint: "Input value here"
    })
  }
}));
main.appendChild(valueInput.element);

const valueDisplay = new Value({
  name: "Value of value:",
  defaultValue: "{ }"
});
main.appendChild(valueDisplay.element);

function update() {
  valueDisplay.value = JSON.stringify(valueInput.value);
  requestAnimationFrame(update);
}
update();
