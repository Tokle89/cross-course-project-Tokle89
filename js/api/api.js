const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products?_embeded";

import { renderProductForHomePage } from "../render/renderProducts.js";
import { renderProducts } from "../render/renderProducts.js";
const spinnerContainer = document.querySelector(".spinner");

export async function getProductForHomePage() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const products = result;
    renderProductForHomePage(products);
    removeSpinner();
  } catch (error) {}
}

export async function getProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderProducts(result);
    removeSpinner();
  } catch (error) {
    console.log(error);
  }
}

function removeSpinner() {
  spinnerContainer.style.display = "none";
}
