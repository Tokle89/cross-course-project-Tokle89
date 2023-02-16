const url = "https://fredrik-tokle.no/schooltesting/rainy-days/wp-json/wc/store/products?_embeded";

import { renderProducts } from "../render/renderProducts.js";

export async function getProduct() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const products = result;
    renderProducts(products);
  } catch (error) {}
}
