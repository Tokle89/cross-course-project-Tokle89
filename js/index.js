const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products?_embeded";
const productContainer = document.querySelector(".product-container");
import { getCart } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";
import { getProduct } from "./api/api.js";

getCart();

createCart();

displayCartTotal();

getProduct();
