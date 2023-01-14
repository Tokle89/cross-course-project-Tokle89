const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const pageTitle = document.all[14];
const metaContentDescription = document.all[5];
const productSection = document.querySelector(".product-specific");
import { products } from "./products.js";
import { addItemToCart } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";
createCart();

const product = products.find(({ name }) => name == id);

pageTitle.innerHTML = product.name;
metaContentDescription.content = `view our amazing ${product.name}`;

productSection.innerHTML = `<div class="product-image__container">
                   <img src=${product.img} alt=${product.name}>
                   <div class="product-image_thumbnails">
                    <div>
                     <img src=${product.img} alt=${product.name}>
                    </div>
                    <div>
                     <img src=${product.img} alt=${product.name}>
                    </div>
                    <div>
                     <img src=${product.img} alt=${product.name}>
                    </div>
                   </div>
                  </div>
                  <div class="product-specific__details">
                   <h1>${product.name}</h1>
                   <ul>
                    <li>waterproof</li>
                    <li>durable</li>
                    <li>warm</li>
                    <li>comfortable</li>
                   </ul>
                  <p> The ${product.name} is made perfect for the adventurous. This jacket will make you comfortable and keep you warm and ready for 
                      your next adventure.
                  </p>
                  <p class="price"> ${product.price} EUR</p>
                  <form  method="post"class="form">
                  <div>
                    <p>size:</p>
                    <select name="Size">
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xtra large">Xtra Large</option>
                    </select>
                  </div>
                </form>
                <button class="cta cta-cart">Add to cart</button>`;

displayCartTotal();

const btn = document.querySelector(".cta-cart");

const sizeValue = document.querySelector("select");

btn.onclick = function () {
  Object.assign(product, { size: sizeValue.value });
  addItemToCart(product);
};
