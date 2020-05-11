import { elements } from './base'


export const clearDisplay = () => {
    elements.display.innerHTML = '0';
    elements.historyDisplay.innerHTML = '0';

}

export const printDisplay = (mathExpression) => {
    elements.display.innerHTML = mathExpression;
}

export const printHistory = (mathExpression) => {
    elements.historyDisplay.innerHTML = mathExpression;
}