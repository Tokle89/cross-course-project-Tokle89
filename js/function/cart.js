const msg = document.querySelector(".cart");
import { createHtml } from "./createhtml.js";
export let cart = JSON.parse(localStorage.getItem("cart"));

export const displayMessage = () => {
  msg.style.display = "block";
};

export function createCart(cart) {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
}

export function addItemToCart(product) {
  if (cart.length === 0) {
    cart.push(product);
  } else {
    let productExsist = cart.find((element) => element.id == product.id);
    if (productExsist === undefined) {
      cart.push(product);
      displayMessage();
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
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

import { deleteBtn } from "../shoppingcart.js";

export function removeFromCart(deleteBTn) {
  deleteBtn.forEach((button) => {
    button.onclick = function () {
      console.log(button.id);

      if (!product) {
        return;
      } else {
        getItem(button.id);
      }
    };
  });
}

function getItem(productId) {
  let tempCart = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(tempCart));
}
