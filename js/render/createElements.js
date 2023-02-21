export function createProductContainer(product) {
  const element = document.createElement("div");
  element.className = "product-container";
  const link = createLink(`details.html?id=${product.id}`, product);
  element.append(link);
  return element;
}

export function createLink(link, product) {
  const element = document.createElement("a");
  element.href = link;

  const imgSrc = product.images[0].src;
  const price = product.prices.price;
  const productName = product.name;

  const img = createImg(imgSrc, productName);
  const textContainer = createProductTextContainer(productName, price);
  element.append(img, textContainer);
  return element;
}

function createImg(src, alt) {
  const element = document.createElement("img");
  element.src = src;
  element.alt = alt;
  return element;
}
function createProductTextContainer(productName, price) {
  const element = document.createElement("div");
  element.className = "product-container_text";
  const p = createP(productName);
  const secondP = createSecondP(`${price} Eur`);

  element.append(p, secondP);
  return element;
}
function createH1(innerText) {
  const element = document.createElement("h1");
  element.innerText = innerText;
  return element;
}
function createP(innerText, className) {
  const element = document.createElement("p");
  element.innerText = innerText;
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function createSecondP(innerText) {
  const element = document.createElement("p");
  element.innerText = innerText;

  return element;
}

export function createImgContainer(className, product) {
  const element = document.createElement("div");
  element.className = className;
  const productName = product.name;
  const imgSrc = product.images[0].src;

  const img = createImg(imgSrc, productName);

  const thumbnail = createThumbnailContainer("product-image_thumbnails", product);

  element.append(img, thumbnail);
  return element;
}
function createThumbnailContainer(className, product) {
  const element = document.createElement("div");
  element.className = className;

  const productName = product.name;
  const imgSrc = product.images[0].src;

  const thumbnail = createThumbnail(imgSrc, productName);
  const secondThumbnail = thumbnail.cloneNode(true);
  const thirdThumbnail = thumbnail.cloneNode(true);

  element.append(thumbnail, secondThumbnail, thirdThumbnail);

  return element;
}
function createThumbnail(imgSrc, productName) {
  const element = document.createElement("div");

  const img = createImg(imgSrc, productName);
  element.append(img);

  return element;
}

export function createTextContainer(className, product) {
  const element = document.createElement("div");
  element.className = className;
  const productName = product.name;
  const price = product.prices.price;

  const h1 = createH1(productName);
  const productDescription = createProductDescription(product);
  const p = createP(`${price} Eur`, "price");
  const form = CreateForm();
  const button = createButton("Add to cart", "cta cta-cart");

  element.append(h1, productDescription, p, form, button);
  return element;
}

function createProductDescription(product) {
  const element = document.createElement("div");

  const string = product.description;
  element.innerHTML = string;
  return element;
}

function CreateForm() {
  const element = document.createElement("form");
  element.name = "size";

  const div = createDiv();
  const p = createP("size");
  const select = createSelect();

  div.append(p, select);
  element.append(div);
  return element;
}

function createSelect() {
  const element = document.createElement("select");
  element.name = "size";

  const option1 = document.createElement("option");
  option1.value = "small";
  option1.innerText = "Small";
  const option2 = document.createElement("option");
  option2.value = "medium";
  option2.innerText = "Medium";
  const option3 = document.createElement("option");
  option3.value = "large";
  option3.innerText = "Large";
  const option4 = document.createElement("option");
  option4.value = "xtra large";
  option4.innerText = "Xtra Large";

  element.append(option1, option2, option3, option4);
  return element;
}

function createDiv() {
  const element = document.createElement("div");
  return element;
}

function createButton(innerText, className) {
  const element = document.createElement("button");
  element.innerText = innerText;
  element.className = className;
  return element;
}
