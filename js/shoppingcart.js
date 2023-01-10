import { cart } from "./function/cart.js";
import { displayCart } from "./function/cart.js";
displayCart(cart);
export const deleteBtn = document.querySelectorAll(".delete-btn");
import { removeFromCart } from "./function/cart.js";
console.log(deleteBtn);

removeFromCart(deleteBtn);
