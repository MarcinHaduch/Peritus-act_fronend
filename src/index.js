import Calculator from './models/Calculator';
import * as calculatorView from './views/calculatorView';
import { elements } from './views/base';

/**
 * Global state of the app
 */

const state = {}
const init = () => {
    calculatorView.clearDisplay();
}
/**
 * Calculator controller
 */
const controlCalculator = (keyPressed) => {

    if (!state.calculator) state.calculator = new Calculator();

    state.calculator.inputKey(keyPressed);
    if (keyPressed === "=") calculatorView.printHistory(state.calculator.history)
    calculatorView.printDisplay(state.calculator.getFormatedExpression());

}
elements.calculatorInputs.forEach((element, i) => {
    if (i !== 0) element.addEventListener("click", e => {
        e.preventDefault()
        controlCalculator(e.target.innerText)
    })
})
console.log(elements.calculatorInputs)
window.addEventListener("load", init)
console.log(Calculator)
console.log(calculatorView)