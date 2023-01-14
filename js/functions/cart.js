export const contentContainer = document.querySelector(".shoppingcart-content__product");
const cartAmount = document.querySelector(".cart-amount");
import { addedToCartMsg } from "./displaymsg.js";
import { productAlreadyInCart } from "./displaymsg.js";

export function getCart() {
  return JSON.parse(localStorage.getItem("cart"));
}
let cart = getCart();

export function createCart() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
}

export function addItemToCart(product) {
  if (cart.length == 0) {
    cart.push(product);
    addedToCartMsg();
  } else {
    let productExsist = cart.find((element) => element.id == product.id);
    if (productExsist === undefined) {
      cart.push(product);
      addedToCartMsg();
    } else {
      productAlreadyInCart();
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function createHtml(product) {
  contentContainer.innerHTML += `<div class="cart-item">
                                  <div class="cart-item_content">
                                   <img src=${product.img} alt=${product.name}>
                                   <div>
                                    <h2>${product.name}</h2>
                                    <p>${product.price} Eur</p>
                                   </div>
                                  </div>
                                   <button class="cta delete-btn" id=${product.id}>Remove</button>
                                 </div>`;
}

export function displayCart(cart) {
  if (!cart) {
    console.log("cart is empty");
  } else {
    cart.forEach((product) => {
      createHtml(product);
    });
  }
}

export function removeFromCart(buttons) {
  buttons.forEach((button) => {
    button.onclick = function () {
      updateLocalStorage(button.id);
      window.location.reload();
    };
  });
}

function updateLocalStorage(productId) {
  let tempCart = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(tempCart));
}

export function displayCartTotal() {
  getCart();
  if (cart.length == 0) {
    cartAmount.style.display = "none";
  } else {
    cartAmount.style.display = "block";
    cartAmount.innerHTML = cart.length;
  }
}
