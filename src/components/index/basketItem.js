export default class BasketItem {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
        <div class="cartFlex">
            <div><img   src="${this.item.productImg}" alt="buy4"></div>
    
            <div class="textCenterCart">
                <div class="textByCart">${this.item.productName}</div>
            <div>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>                  
            <div class="priceCart">
                ${this.item.amount} x <span>${this.item.productPrice}</span> = ${this.item.amount * this.item.productPrice}
            </div>
            </div>
            <div class="cartCircle">
                <a href="#" class="far fa-times-circle faCart" name="remove" data-id="${this.item.productId}"></a>
            </div>        
        </div> 
        <div class="horizontal cartHorizontal"></div>   
    `
    }
}