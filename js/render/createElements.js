export function createProductContainer(product) {
  const productName = product.name;
  const price = product.prices.price;
  const imgSrc = product.images[0].src;

  const p = createElement("p", undefined, undefined, productName);
  const secondP = createElement("p", undefined, undefined, `${price} Eur`);
  const productTextContainer = createElement("div", ["product-container_text"], [p, secondP]);

  const img = createElement("img", undefined, undefined, undefined, undefined, imgSrc, productName);
  const link = createElement("a", undefined, [img, productTextContainer], undefined, `details.html?id=${product.id}`);

  const productContainer = createElement("div", ["product-container"], [link]);

  return productContainer;
}
export function createImgContainer(product) {
  const productName = product.name;
  const imgSrc = product.images[0].src;

  const img = createElement("img", undefined, undefined, undefined, undefined, imgSrc, productName);
  const thumbnailContainer = createThumbnailContainer(imgSrc, productName);
  const imgContainer = createElement("div", ["product-image__container"], [img, thumbnailContainer]);

  return imgContainer;
}
function createThumbnailContainer(imgSrc, productName) {
  const img = createElement("img", undefined, undefined, undefined, undefined, imgSrc, productName);

  const thumbnail = createElement("div", undefined, [img]);
  const secondThumbnail = thumbnail.cloneNode(true);
  const thirdThumbnail = thumbnail.cloneNode(true);

  const thumbnailContainer = createElement("div", ["product-image_thumbnails"], [thumbnail, secondThumbnail, thirdThumbnail]);

  return thumbnailContainer;
}

export function createTextContainer(product) {
  const productName = product.name;
  const price = product.prices.price;
  console.log(product.name);

  const h1 = createElement("h1", undefined, undefined, `${productName}`);
  const productDescription = createProductDescription(product);
  const p = createElement("p", ["price"], undefined, `${price} Eur`);
  const form = createForm();
  const button = createElement("button", ["cta", "cta-cart"], undefined, "Add to cart");
  const textContainer = createElement("div", ["product-specific_details"], [h1, productDescription, p, form, button]);

  return textContainer;
}

function createProductDescription(product) {
  const productDescription = createElement("div");

  const string = product.description;
  productDescription.innerHTML = string;
  return productDescription;
}
function createForm() {
  const p = createElement("p", undefined, undefined, "Size:");
  const select = createSelect();
  const div = createElement("div", undefined, [p, select]);
  const form = createElement("form", undefined, [div]);
  form.name = "size";
  return form;
}
function createSelect() {
  const select = createElement("select");
  select.name = "size";

  const option1 = createElement("option", undefined, undefined, "Small");
  option1.value = "small";
  const option2 = createElement("option", undefined, undefined, "Medium");
  option2.value = "medium";
  const option3 = createElement("option", undefined, undefined, "large");
  option3.value = "large";
  const option4 = createElement("option", undefined, undefined, "Xtra Large");
  option4.value = "Xtra large";

  select.append(option1, option2, option3, option4);
  return select;
}

function createElement(tagName, classes, children, text, link, src, alt) {
  const element = document.createElement(tagName);
  if (Array.isArray(classes) && classes) {
    element.classList.add(...classes);
  }
  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if (text) {
    element.innerText = text;
  }
  if (link) {
    element.href = link;
  }
  if (tagName === "img") {
    element.src = src;
    element.alt = alt;
  }
  return element;
}
