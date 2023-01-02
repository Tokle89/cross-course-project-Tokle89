const productContainer = document.querySelector(".product-container");

import { products } from "./products.js";

console.log(products[0]);

function createHtml() {
  productContainer.innerHTML = `<a href="products/offpist.html">
                                 <img src=${products[0].img} alt=${products[0].name}>
                                 <div class="product-container_text">
                                  <p>${products[0].name}</p>
                                  <p>${products[0].price}</p>
                                 </div>
                                </a>`;
}

createHtml();
