import { getCart } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";
import { getProductForHomePage } from "./api/api.js";

getCart();

createCart();

displayCartTotal();

getProductForHomePage();
