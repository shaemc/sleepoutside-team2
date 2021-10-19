import { loadHeaderFooter } from "./utils";

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  let markup = "";
  const cartItems = getLocalStorage("so-cart");

  if (cartItems) {
    const htmlItems = cartItems.map((item) => renderCartItem(item));
    console.log(cartItems);
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    let total = 0;

    const finalTotal = cartItems
      .map((item) => (total += item.FinalPrice))
      .pop();

    console.log(finalTotal);
    const showTotal = `<h3>Total: $${finalTotal}<h3/>`;
    document.querySelector(".products").innerHTML += showTotal;
  }

  // document.querySelector('.product-list').innerHTML = renderCartItem(cartItems);
}

function renderCartItem(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  <p id='remove'>x</p>
</li>`;

  return newItem;
}

getCartContents();

loadHeaderFooter();
