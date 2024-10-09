import { Product } from "./product";

//abstrair
export class Cart{
    private  static _products:Product[] = []; //com o static não é preciso instanciar quando precisar chamar o objeto (exemplo em product)
    private  static _orderTotal:number = 0;
    private static _totalQuantity: number = 0;
      
//nao precisa necessariamente de um contrutor porque os produtos ja estão sendo inicializado na class  

    toCarHtml(){
        const cart =document.getElementById("cart");

        if(!cart)return

        
    }

    static calculeteTotal(){
        this._orderTotal = 0; 
        this._totalQuantity = 0;

        for (const product of this.products) {
            this._orderTotal += product.total;
            this._totalQuantity += product.quantity;
        }
    }

    static removeProduct(product:Product){
    //remove um produto do carrinho, filtrando pelo produto em questão
    this._products = this._products.filter((item) => item.id !== product.id);
        this.calculeteTotal();
    }

   static addToCart(product:Product){
        //verifica se o mesmo produto esta no carrinho
        const productInCar = this._products.includes(product);

        if(!productInCar){
        this._products.push(product) //chamando o array e adicionando produto no carrinho
        }

        this.calculeteTotal(); 

         // Atualiza o carrinho de compras no HTML
         this.toHTML();
    

    }
        static toHTML(){
            const cartContainerHTML = document.getElementById("cart-container");

            if(!cartContainerHTML) return;

            const totalQuantityHTML = cartContainerHTML.querySelector("total-quantity-text")

            if(totalQuantityHTML) return;
            totalQuantityHTML.textContent = this._totalQuantity.toString();

            let ulProductsHTML = cartContainerHTML.querySelector("ul");

            if (ulProductsHTML){
                ulProductsHTML.innerHTML = "";

            }else{
                ulProductsHTML = document.querySelector("ul");
            }

            for (const product of this._products) {
                const liProductHTML = document.createElement("li")
                
                const productHTML = `
                <span>${product.name}</span>
                <div>
                  <span>${product.quantity}x</span>
                  <span>@$${product.price}</span>
                  <span>$${product.total}</span>
                </div>
              `;

              liProductHTML.innerHTML = productHTML;
              ulProductsHTML?.appendChild(ulProductsHTML);
            }
                cartContainerHTML.appendChild(ulProductsHTML);
        }


    static get products(){
        return this._products;
    }
    
   static get total(){
        return this._orderTotal;
    }
    

}