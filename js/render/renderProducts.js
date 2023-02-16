export function renderProducts(products) {
  products.forEach((product) => {
    if (product.name == "Offpist Jacket") {
      renderProduct(product);
      console.log("hello");
    } else {
    }
  });
}

export function renderProduct(product) {
  const imgSrc = product.images[0].src;
  const price = product.prices.price;
  const productName = product.name;

  const link = createLink(`details.html?id=${product.id}`);
  const img = createImg(imgSrc, price);

  const textContainer = createProductTextContainer(productName, price);

  link.append(img, textContainer);

  const productContainer = document.querySelector(".product-container");
  productContainer.append(link);
}

export function createLink(link) {
  const element = document.createElement("a");
  element.href = link;
  return element;
}

export function createImg(src, alt) {
  const element = document.createElement("img");
  element.src = src;
  element.alt = alt;
  return element;
}

export function createP(innerText) {
  const element = document.createElement("p");
  element.innerText = innerText;
  return element;
}

export function createSecondP(innerText) {
  const element = document.createElement("p");
  element.innerText = innerText;
  return element;
}

export function createProductTextContainer(productName, price) {
  const element = document.createElement("div");
  element.className = "product-container_text";

  const p = createP(productName);
  const secondP = createSecondP(`${price} Eur`);

  element.append(p, secondP);
  return element;
}
