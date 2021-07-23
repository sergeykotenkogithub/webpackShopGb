let itemTypes = {
    basket: basketItemRender,
    catalog: catalogItemRender
}

export default class ITEM {
    constructor(item, type) {
        this.item = item;
        this.type = type;  
    }
    render() {
        return itemTypes[this.type](this.item)
    }
}

function catalogItemRender(item) {
    return `        
    <div class="featuredBuyItem" id="catalog">               
        <div class="addToCart">
            <div class="coverAddtoCart">
            <div>                     
                <button class="backColor newBackColor"
                            name="add"
                            data-id="${item.productId}"
                        >
                        <img class="cartBuy" src="../src/assets/images/carsBuy.png" alt="cartBuy" />
                        &nbsp ADD TO CART
                        </button>          
            </div>
            </div>
        </div>
        <div><img src="${item.productImg}" /></div>           
        <div class="name_buy_item">${item.productName}</div>
        <div class="price_item">$${item.productPrice}</div>
    </div>
    `
}

function basketItemRender(item) {
    return `
    <div class="cartFlex">
        <div><img src="${item.productImg}" alt="buy4"></div>

        <div class="textCenterCart">
            <div class="textByCart">${item.productName}</div>
        <div>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>                  
        <div class="priceCart">
            ${item.amount} x <span>${item.productPrice}</span> = ${item.amount * item.productPrice}
        </div>
        </div>
        <div class="cartCircle">
            <a href="#" class="far fa-times-circle faCart" name="remove" data-id="${item.productId}"></a>
        </div>        
        </div> 
        <div class="horizontal cartHorizontal"></div>   
    `
}

