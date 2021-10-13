// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  let currentCart = getLocalStorage(key);
  if (!currentCart) {
    currentCart = [];
  }
  currentCart.push(data);
  localStorage.setItem(key, JSON.stringify(currentCart));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export default function getParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");
  return product;
}

export function renderListWithTemplate(
  template,
  parentElement,
  list,
  callback
) {
  list.forEach((element) => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, element);
    parentElement.appendChild(templateWithData);
  });
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
) {
  console.log(template);
  let clone = template.content.cloneNode(true);
  if(callback) {
    clone = callback(clone, data);
  }
  parentElement.appendChild(clone);
}

function convertToText(res) {
  if (res.ok){
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

export async function loadTemplate(path){
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter(){
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
  //after the renderWithTemplate has been called, call the superscript function to display the superscript

}

export function animateCart(){
  // add listener to Add to Cart button
  let addCart = document.getElementById("addToCart");
  addCart.style.color = "purple";

}