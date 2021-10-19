const baseURL = "http://157.201.228.93:2992/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }

  // get tents data
  getProductsData(category) {
    return fetch(`${baseURL}products/search/${category}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }

  async findProductById(id) {
    return await fetch(`${baseURL}products/${id}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch('../json/tents.json').then(convertToJson);
// }
