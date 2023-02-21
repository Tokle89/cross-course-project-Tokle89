const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";
import { getDetailedProduct } from "./api/api.js";
createCart();

getDetailedProduct(id);

displayCartTotal();
