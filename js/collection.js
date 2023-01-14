const productsContainer = document.querySelector(".products");
import { displayCartTotal } from "./functions/cart.js";
import { products } from "./products.js";
import { createCart } from "./functions/cart.js";
createCart();

const createHtml = (products) => {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    productsContainer.innerHTML += `<div class="product-container">
                                     <a href="details.html?id=${product.name}">
                                      <img src=${product.img} alt=${product.name}>
                                      <div class="product-container_text">
                                       <p>${product.name}</p>
                                       <p>${product.price} EUR</p>
                                      </div>
                                     </a>
                                    </div>`;
  });
};

createHtml(products);

displayCartTotal();
