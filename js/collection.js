import { getProducts } from "./api/api.js";
import { displayCartTotal } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
createCart();

getProducts();

displayCartTotal();
