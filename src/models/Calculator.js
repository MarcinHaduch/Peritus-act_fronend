import { evaluate } from 'mathjs'

export default class Calculator {
    constructor() {
        this.arrayOfInputs = [];
    }
    inputKey(key) {
        if (!isNaN(key)) this.arrayOfInputs.push(key);
        else {
            switch (key) {
                case "%":
                    //TODO toggle mechanism for the last element
                    break;
                case "+/-":
                    //TODO toggle element for the first element or just after non-digit char
                    break;
                case "C":
                    let lastElement = this.arrayOfInputs[this.arrayOfInputs.length - 1];
                    if (lastElement.length > 1) {
                        this.arrayOfInputs[this.arrayOfInputs.length - 1] = lastElement.substring(0, lastElement.length - 1);
                    } else { this.arrayOfInputs.pop(); }
                    break;
                //Rewritten as default
                /*        case "/":
                           if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(` ${key} `);
                           break;
                       case "x":
                           if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(` ${key} `);
                           break;
                       case "-":
                           if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(` ${key} `);
                           break;
                       case "+":
                           if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(` ${key} `);
                           break; */
                case ",":
                    if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(`${key}`);
                    break;
                case "=":
                    this.history = this.getFormatedExpression()
                    this.arrayOfInputs = [`${evaluate(this.history.replace("x", "*").replace(",", "."))}`]
                    break;
                default:
                    if (!isNaN(this.arrayOfInputs[this.arrayOfInputs.length - 1])) this.arrayOfInputs.push(` ${key} `);

            }
        }
    }

    getFormatedExpression() {
        return this.arrayOfInputs.join("");
    }
}