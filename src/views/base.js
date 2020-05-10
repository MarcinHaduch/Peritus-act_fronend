export const elements = {

};
export const emlementStrings = {
    loader: 'loader'
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${emlementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader)
};