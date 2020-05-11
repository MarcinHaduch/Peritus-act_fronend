export const elements = {
    display: document.querySelector(".calculator__current"),
    historyDisplay: document.querySelector(".calculator__history"),
    calculatorInputs: Array.from(document.querySelectorAll(".calculator__element"))
};
export const emlementStrings = {
    loader: 'loader'
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${emlementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader)
};