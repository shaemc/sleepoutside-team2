export default class ProductListing {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getProductsData();

    // render the list
    this.renderList(list);
  }

  renderList(list) {
    const template = document.getElementById("product-card-template");
    const filteredList = list.filter(
      (item) => item.Id !== "989CG" && item.Id !== "880RT"
    );

    filteredList.forEach((product) => {
      const clone = template.content.cloneNode(true);
      // insert the actual details of the current product into the template
      const hydratedTemplate = this.prepareTemplate(clone, product);
      this.listElement.appendChild(hydratedTemplate);
    });
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Image;
    template.querySelector("h3").textContent = product.Brand.Name;
    template.querySelector("h2").textContent = product.Name;
    template.querySelector("p").textContent += product.FinalPrice;

    return template;
  }
}
