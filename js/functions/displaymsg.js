const msg = document.querySelector(".cart");
import { getCart } from "./cart.js";
import { contentContainer } from "./cart.js";

let cart = getCart();

export const addedToCartMsg = () => {
  msg.style.display = "block";
  msg.innerHTML = `<h2>added to cart!</h2>
                   <a href="../collection.html" class="cta">shop more</a>
                   <a href="../checkout.html" class="cta">checkout</a>`;
};

export const productAlreadyInCart = () => {
  msg.style.display = "block";
  msg.innerHTML = `<h2>This product is already added to your cart</h2>
                   <a href="../collection.html" class="cta">shop more</a>
                   <a href="../checkout.html" class="cta">checkout</a>`;
};

export function cartIsEmptyMsg() {
  if (cart.length == 0) {
    contentContainer.innerHTML = `<div class="message-container">
                                  <h2 id="msg_h2">Your shopping cart is empty</h2>
                                  <p> View our amazing products here</p>
                                  <div id="msg_cta">
                                  <a href="collection.html" class="cta"> collection</a>
                                  </div>
                                  </div>`;

    const checkoutCta = document.querySelector(".checkout-cta");

    checkoutCta.style.display = "none";
  }
}

export function msgIsSent() {
  msg.style.display = "block";
  msg.innerHTML = `<h2>Your message has been sent</h2>
                   <p> We will try to answer you in 2-5 working days</p>
                   <button class="cta close-button">close</button>`;
  closeMsgIsSent();
}

function closeMsgIsSent(closeButton) {
  closeButton = document.querySelector(".close-button");
  closeButton.onclick = function () {
    msg.style.display = "none";
  };
}
