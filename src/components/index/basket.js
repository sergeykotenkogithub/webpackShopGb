import LIST from "./LIST";

export default class Basket extends LIST {

    constructor(basket = null, container = '#basket-items', url = "/basket.json") {
        super(basket, container, url)
        this.total =null;
        this.wrapper = document.querySelector('#basket-inner');
        this.sum = 0;
        this.totalContainer = document.querySelector('#basket-sum');
        this.clickCart = document.querySelector('#clickCart');
    }

    _render() { 
        super._render()  
        this._calcSum();
    }

    // Подсчёт стоимости общей
    _calcSum() {
        this.sum = 0;
        this.items.forEach(item => {
            this.sum += item.amount * item.productPrice;
        });

        this.totalContainer.innerText = this.sum;
    }

    // В item мы пробрасываем объект, содержащий данные в том числе и id
    // item мы находим через catalog.js
    add(item) {      
        let find = this.items.find(el => item.productId == el.productId);

        if(find) {
            find.amount++
        } else {
            this.items.push(Object.assign({}, item, {amount: 1}));
        }

        this._render();
    }
   
    _remove(id) {            
        let find = this.items.find(el => el.productId == id);

        if(find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1) // 1 - значит 1 элемент
        }

        this._render();
    }

    _handleEvents() {          
        document.querySelector('#basket-btn').addEventListener('click', e => {
        this.wrapper.classList.toggle('hidden')
        // toggle убирает класс, а если есть то добовляет, вот и получается что при нажатиее он показывается, а при втором закрывается (hidden в _header.scss)
        });
        
        //Удаление
        this.container.addEventListener('click', event => {
        if(event.target.name == 'remove') {
            this._remove(event.target.dataset.id)
        }
    });
    } 
}