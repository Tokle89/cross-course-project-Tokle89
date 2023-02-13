const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products?_embeded";
const productContainer = document.querySelector(".product-container");
import { getCart } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";

getCart();

createCart();

displayCartTotal();

let productName = "Offpist Jacket";

async function getProduct() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result);
  } catch (error) {}
}

const createHtml = (products) => {
  products.forEach((product) => {
    if (product.name == productName) {
      const imgSrc = product.images[0].src;
      const price = product.prices.price;
      productContainer.innerHTML = `
                                     <a href="details.html?id=${product.name}">
                                      <img src=${imgSrc} alt=${product.name}>
                                      <div class="product-container_text">
                                       <p>${product.name}</p>
                                       <p>${price}</p>
                                      </div>
                                     </a>`;
    }
  });
};
getProduct();
