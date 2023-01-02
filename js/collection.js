const productsContainer = document.querySelector(".products");

import { products } from "./products.js";

const createHtml = (products) => {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    productsContainer.innerHTML += `<div class="product-container">
                                     <a href="details.html?id=${product.name}">
                                      <img src=${product.img} alt=${product.name}>
                                      <div class="product-container_text">
                                       <p>${product.name}</p>
                                       <p>${product.price}</p>
                                      </div>
                                     </a>
                                    </div>`;
  });
};

createHtml(products);

console.log(productsContainer);

console.log(products);
