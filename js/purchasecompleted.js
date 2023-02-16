import { getCart } from "./functions/cart.js";
import { displayCart } from "./functions/cart.js";
import { findTotalPrice } from "./functions/findprice.js";

let cart = getCart();

findTotalPrice();

displayCart(cart);

localStorage.clear();
