import { createProductContainer } from "./createElements.js";

export function renderProductForHomePage(products) {
  products.forEach((product) => {
    if (product.name == "Offpist Jacket") {
      renderHomePageProduct(product);
      console.log("hello");
    } else {
    }
  });
}

export function renderProducts(products) {
  products.forEach(renderProduct);
}

function renderHomePageProduct(product) {
  const productContainer = createProductContainer(product);

  const featuredProductContainer = document.querySelector(".featured");
  featuredProductContainer.append(productContainer);
}

function renderProduct(product) {
  const productContainer = createProductContainer(product);

  const featuredProductContainer = document.querySelector(".products");
  featuredProductContainer.append(productContainer);
}

function renderDetailedProduct() {}
