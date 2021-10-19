import getParams from "./utils.js";
import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

const productId = getParams("product");

const product = new ProductData();
const details = new ProductDetails(productId, product);

details.init();
