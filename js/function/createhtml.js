const contentContainer = document.querySelector(".shoppingcart-content__product");
export function createHtml(product) {
  contentContainer.innerHTML += `<div class="cart-item">
                                  <div>
                                   <img src=${product.img} alt=${product.name}>
                                  </div>
                                  <div>
                                   <h2>${product.name}</h2>
                                   <p>${product.price}</p>
                                  </div>
                                  <button class="cta delete-btn" id=${product.id}>Delete</button>
                                 </div>`;
}
