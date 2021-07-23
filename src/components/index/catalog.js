import LIST from "./LIST.js"; 

export default class Catalog extends LIST {

  constructor(basket, container = "#catalog", url = "/catalog.json") {
    super(basket, container, url);
    this.type = 'catalog';
  }

  _handleEvents() {
    this.container.addEventListener("click", (event) => {
      if (event.target.name == "add") {
        let id = event.target.dataset.id;
        let item = this.items.find((el) => el.productId == id);
        this.basket.add(item);
      }
    });
  }
};