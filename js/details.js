const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const pageTitle = document.all[14];
const metaContentDescription = document.all[5];
const productSection = document.querySelector(".product-specific");
import { addItemToCart } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
import { displayCartTotal } from "./functions/cart.js";
createCart();

const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products/" + id + "?_embeded";
console.log(url);

async function getProduct() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const product = result;
    createHtml(product);
    addToCart(product);
    pageTitle.innerHTML = product.name;
    metaContentDescription.content = `view our amazing ${product.name}`;
  } catch (error) {}
}
getProduct();

const createHtml = (product) => {
  const imgSrc = product.images[0].src;
  const price = product.prices.price;

  productSection.innerHTML = `<div class="product-image__container">
                   <img src=${imgSrc} alt=${product.name}>
                   <div class="product-image_thumbnails">
                    <div>
                     <img src=${imgSrc} alt=${product.name}>
                    </div>
                    <div>
                     <img src=${imgSrc} alt=${product.name}>
                    </div>
                    <div>
                     <img src=${imgSrc} alt=${product.name}>
                    </div>
                   </div>
                  </div>
                  <div class="product-specific__details">
                   <h1>${product.name}</h1>
                  ${product.description}
                  <p class="price"> ${price} EUR</p>
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
};

displayCartTotal();

function addToCart(product) {
  const btn = document.querySelector(".cta-cart");

  const sizeValue = document.querySelector("select");

  btn.onclick = function () {
    Object.assign(product, { size: sizeValue.value });
    addItemToCart(product);
  };
}
