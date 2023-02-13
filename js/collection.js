const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products?_embeded";
const productsContainer = document.querySelector(".products");
const spinnerContainer = document.querySelector(".spinner");
import { displayCartTotal } from "./functions/cart.js";
import { createCart } from "./functions/cart.js";
createCart();

async function getProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    createHtml(result);
  } catch (error) {}
}

const createHtml = (products) => {
  spinnerContainer.style.display = "none";
  products.forEach((product) => {
    let imgSrc = product.images[0].src;
    productsContainer.innerHTML += `<div class="product-container">
                                     <a href="details.html?id=${product.id}">
                                      <img src=${imgSrc} alt=${product.name}>
                                      <div class="product-container_text">
                                       <p>${product.name}</p>
                                       <p>${product.prices.price} EUR</p>
                                      </div>
                                     </a>
                                    </div>`;
  });
};

getProducts();

displayCartTotal();
