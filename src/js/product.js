import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import getParams from "./utils.js";
const product = new ProductData("tents");
const productId = getParams("product");
const details = new ProductDetails(productId, product);
details.init(); 

