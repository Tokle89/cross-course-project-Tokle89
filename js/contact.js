import { displayCartTotal } from "./functions/cart.js";
import { validateForm } from "./functions/form.js";
import { createCart } from "./functions/cart.js";
import { msgIsSent } from "./functions/displaymsg.js";
const form = document.querySelector("form");

createCart();
displayCartTotal();
validateForm();

function submitForm(event) {
  event.preventDefault();
  msgIsSent();
  form.reset();
}

form.addEventListener("submit", submitForm);

const cart = document.querySelector(".cart");
console.log(cart);
