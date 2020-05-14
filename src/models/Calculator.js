import { evaluate } from 'mathjs'

export default class Calculator {
    constructor() {
        this.arrayOfInputs = [];
    }
    inputKey(key) {
        if (!isNaN(key)) this.arrayOfInputs.push(key);
        else {
            let lastElement = this.arrayOfInputs[this.arrayOfInputs.length - 1];
            switch (key) {
                case "%":
                    if (!isNaN(lastElement)) {
                        this.arrayOfInputs.push(`${key}`);
                    } else if (lastElement === '%') { this.arrayOfInputs.pop() }

                    break;
                case "+/-":
                    let tempArray = this.arrayOfInputs.join('').split(' ');
                    console.log(tempArray[tempArray.length - 1].charAt(0))
                    if (tempArray[tempArray.length - 1].charAt(0) !== "-") {
                        tempArray[tempArray.length - 1] = "-".concat(tempArray[tempArray.length - 1]);
                    } else {
                        console.log("here")
                        tempArray[tempArray.length - 1] = tempArray[tempArray.length - 1].substring(1);
                    }
                    tempArray = tempArray.join(" ");
                    this.arrayOfInputs = tempArray.split("");
                    break;
                case "C":
                    if (lastElement.length > 1 && !isNaN(lastElement)) {
                        this.arrayOfInputs[this.arrayOfInputs.length - 1] = lastElement.substring(0, lastElement.length - 1);
                    } else { this.arrayOfInputs.pop(); }
                    break;
                case ",":
                    if (!isNaN(lastElement)) this.arrayOfInputs.push(`${key}`);
                    break;
                case "=":
                    this.history = this.getFormatedExpression()
                    this.arrayOfInputs = [`${evaluate(this.history.replace("x", "*").replace(",", ".").replace("%", "*0.01"))}`]
                    break;
                default:
                    if (!isNaN(lastElement)) this.arrayOfInputs.push(` ${key} `);

            }
        }
    }

    getFormatedExpression() {
        return this.arrayOfInputs.join("");
    }
}