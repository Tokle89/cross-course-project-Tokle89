import { getCart } from "./functions/cart.js";
import { displayCart } from "./functions/cart.js";
import { findTotalPrice } from "./functions/findprice.js";
import { contentContainer } from "./functions/cart.js";

let cart = getCart();

findTotalPrice();

cart.forEach((product) => {
  contentContainer.innerHTML += `<div class="cart-item">
                                  <div class="cart-item_content">
                                   <img src=${product.img} alt=${product.name}>
                                   <div>
                                    <h2>${product.name}</h2>
                                    <p>${product.price} Eur</p>
                                   </div>
                                  </div>
                                 </div>`;
});

localStorage.clear();
