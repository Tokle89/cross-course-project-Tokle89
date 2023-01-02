const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const pageTitle = document.all[14];
const metaContentDescription = document.all[5];
const productSection = document.querySelector(".product-specific");
const msg = document.querySelector(".cart");
import { products } from "./products.js";

const product = products.find(({ name }) => name == id);

const createHtml = () => {
  pageTitle.innerHTML = ` ${product.name}`;
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
                  <p class="price"> ${product.price}</p>
                  <form  method="post"class="form">
                  <div>
                    <p>quantity:</p>
                    <select name="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </form>
                <button class="cta cta-cart">Add to cart</button>`;

  return productSection.innerHTML;
};

createHtml();

const btn = document.querySelector(".cta-cart");

const displayMessage = (message) => {
  msg.style.display = "block";
  console.log("hello");
};

btn.addEventListener("click", displayMessage);

console.log("click");
