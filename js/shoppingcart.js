const contentContainer = document.querySelector(".shoppingcart-content__product");

let products = Object.values(localStorage);

const createHtml = (product) => {
  contentContainer.innerHTML += `<div class="cart-item">
                                  <div>
                                   <img src=${product.img} alt=${product.name}>
                                  </div>
                                  <div>
                                   <h2>${product.name}</h2>
                                   <p>${product.price}</p>
                                  </div>
                                  <button class="cta delete-btn">Delete</button>
                                 </div>`;
};

products.forEach((product) => {
  let parsedProducts = JSON.parse(product);

  createHtml(parsedProducts);
});

const deleteBtn = document.querySelectorAll(".delete-btn");

deleteBtn.forEach((button) => {
  console.log("hello");
});
