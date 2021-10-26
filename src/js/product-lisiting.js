import { loadHeaderFooter } from "./utils";
import getParams from "./utils";
import ProductData from "./productData";
import ProductListing from "./productList";

loadHeaderFooter();

const category = getParams("category");

const productData = new ProductData();
const listElement = document.querySelector(".product-list");
const productList = new ProductListing(category, productData, listElement);

productList.init();
