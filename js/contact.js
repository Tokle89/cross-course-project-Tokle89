import { displayCartTotal } from "./functions/cart.js";
import { validateForm } from "./functions/form.js";
import { createCart } from "./functions/cart.js";
import { msgIsSent } from "./functions/displaymsg.js";
const form = document.querySelector("form");
const button = document.querySelector("button");

createCart();
displayCartTotal();
validateForm();

button.addEventListener("click", msgIsSent);

function submitForm(event) {
  event.preventDefault();
  msgIsSent();
}

form.addEventListener("submit", submitForm);

// closeMsgIsSent(closeButton);

const cart = document.querySelector(".cart");
console.log(cart);
