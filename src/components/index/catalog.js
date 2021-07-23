import CatalogItem from './catalogItem.js'

export default class Catalog {

  constructor(basket, container = "#catalog", url = "/catalog.json") {
    this.items = [];
    this.container = document.querySelector(container);
    this.basket = basket;
    this.url = "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json" + url;
    this._init()
  }


  _init() {
    //async
    this._get(this.url) //Метод подключения к json на git
      .then((catalog) => {
        this.items = catalog;
        this._render();
        this._handleEvents();
      });
  }

  // Метод подключения к json на git
  _get(url) {
    return fetch(url).then((d) => d.json()); // сделает запрос за джейсоном, дождётся ответа и преобразует json в объект, который вернётся из даного метода
  }

  _render() {
    let htmlStr = "";

    this.items.forEach((item) => {
      htmlStr += new CatalogItem(item).render();
    });
    this.container.innerHTML = htmlStr;
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