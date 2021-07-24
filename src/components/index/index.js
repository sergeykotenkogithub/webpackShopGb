export default () => {
   const app = new Vue({
      el: "#app",
      data: {
         catalog: {
            items: [],
            url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/catalog.json"
         },
         basket: {
            items: [],
            url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/basket.json",
            show: false
         },
         price: 0 // временно
      },

      methods: {

         get(url) {
            return fetch(url).then(d => d.json())
         },

         add(item) {
            let find = this.basket.items.find(el => item.productId == el.productId);

            if(find) {
               find.amount++
            } else {
               this.basket.items.push(Object.assign({}, item, {amount: 1}));
            }

            this._render();
         },

         remove(id) {

            let find = this.basket.items.find(el => el.productId == id);

            if(find.amount > 1) {
               find.amount--;
            } else {
               this.basket.items.splice(this.basket.items.indexOf(find), 1) // 1 - значит 1 элемент
            }

            this._render();
         }
      },

      async mounted() {
         try {
            this.catalog.items = await this.get(this.catalog.url);
            this.basket.items = (await this.get(this.basket.url)).content;
         }
         catch (err) {
            console.log(err)
         }
         finally {
         }
      }
   })
}
