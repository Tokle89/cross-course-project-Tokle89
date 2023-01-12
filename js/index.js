const productContainer = document.querySelector(".product-container");

import { products } from "./products.js";

let productName = "Offpist jacket";

const createHtml = (products) => {
  products.forEach((product) => {
    if (productName == product.name) {
      productContainer.innerHTML = `
                                     <a href="details.html?id=${product.name}">
                                      <img src=${product.img} alt=${product.name}>
                                      <div class="product-container_text">
                                       <p>${product.name}</p>
                                       <p>${product.price}</p>
                                      </div>
                                     </a>`;
    }
  });
};

createHtml(products);
