const subTotal = document.querySelector(".sub-price");
const shippingPrice = document.querySelector(".shipping-price");
const totalPrice = document.querySelector(".total-price");
import { getCart } from "./cart.js";

let cart = getCart();

let sum = 0;

export function findTotalPrice() {
  for (let i = 0; i < cart.length; i++) {
    sum += parseFloat(cart[i].prices.price);
  }

  subTotal.innerHTML = sum + ` EUR`;

  let shippingSum = shippingPrice.innerHTML.replace(/\D/g, "");

  let totalSum = sum + parseInt(shippingSum);
  totalPrice.innerHTML = totalSum + ` EUR`;
}
