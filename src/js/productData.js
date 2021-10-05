function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  // get tents data
  getProductsData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getProductsData();
    return products.find((item) => item.Id === id);
  }
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch('../json/tents.json').then(convertToJson);
// }
