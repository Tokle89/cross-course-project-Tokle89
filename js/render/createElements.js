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

  const img = createImg(imgSrc, price);
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

function createP(innerText) {
  const element = document.createElement("p");
  element.innerText = innerText;
  return element;
}

function createSecondP(innerText) {
  const element = document.createElement("p");
  element.innerText = innerText;
  return element;
}
