import {
  setLocalStorage,
  animateCart,
  loadHeaderFooter,
  renderSuperscript,
} from "./utils.js";

loadHeaderFooter();

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProduct();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  // add to cart button event handler
  addToCart() {
    // const product = products.find((item) => item.Id === e.target.dataset.id);
    setLocalStorage("so-cart", this.product);
    animateCart();
    renderSuperscript();
  }

  renderProduct() {
    const product = this.product;

    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryMedium}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
  }
}

// add listener to Add to Cart button
//document.getElementById("addToCart").addEventListener("click", addToCart);
