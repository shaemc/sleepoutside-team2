import ProductData from "./productData";
import ProductListing from "./productList";

const listElement = document.querySelector(".product-list");

const productData = new ProductData("tents");
const productList = new ProductListing("tents", productData, listElement);

productList.init();
