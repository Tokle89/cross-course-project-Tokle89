const BaseUrl = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products/";
const embeded = "?_embeded";
const url = BaseUrl + embeded;

import { renderProductForHomePage } from "../render/renderProducts.js";
import { renderProducts } from "../render/renderProducts.js";
import { renderDetailedProduct } from "../render/renderProducts.js";
import { addToCart } from "../functions/cart.js";

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

export async function getDetailedProduct(id) {
  const detailedUrl = BaseUrl + id + embeded;
  try {
    const pageTitle = document.all[14];
    const metaContentDescription = document.all[5];

    const response = await fetch(detailedUrl);
    const result = await response.json();
    console.log(result);
    pageTitle.innerHTML = result.name;
    metaContentDescription.content = `View our amazing ${result.name}`;
    renderDetailedProduct(result);
    removeSpinner();
    addToCart(result);
  } catch (error) {
    console.error(error);
  }
}

function removeSpinner() {
  spinnerContainer.style.display = "none";
}
