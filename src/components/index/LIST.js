import ITEM from './ITEM.js';

export default class LIST {
    
    constructor(basket, container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.basket = basket;
        this.url = "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json" + url; 
        this._init()
    }

    _init() {        
        this._get(this.url) //Метод подключения к json на git
        .then(data => { 
        this.items = this.type === 'catalog' ? data : data.content;
        this._render();
        this._handleEvents();
        });
      
    }

    _get(url) {
        return fetch(url).then(d => d.json()) // сделает запрос за джейсоном, дождётся ответа и преобразует json в объект, который вернётся из даного метода
    }

    _render() {
        let htmlStr = "";
        this.items.forEach((item) => {
          htmlStr += new ITEM(item, this.type).render();          
        });
        this.container.innerHTML = htmlStr;     
    }
}