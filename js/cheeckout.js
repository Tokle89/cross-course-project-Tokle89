import { getCart } from "./functions/cart.js";
import { displayCart } from "./functions/cart.js";
import { removeFromCart } from "./functions/cart.js";
import { findTotalPrice } from "./functions/findprice.js";
import { validateForm } from "./functions/form.js";
import { displayCartTotal } from "./functions/cart.js";
let cart = getCart();
displayCart(cart);

const deleteBtn = document.querySelectorAll(".delete-btn");

removeFromCart(deleteBtn);

findTotalPrice();

validateForm();

displayCartTotal();
