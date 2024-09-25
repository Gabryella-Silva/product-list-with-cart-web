import { Product } from "./product";

//abstrair
export class Cart{
    private  static _products:Product[] = []; //com o static não é preciso instanciar quando precisar chamar o objeto (exemplo em product)
    private  static _total:number = 0;
      
//nao precisa necessariamente de um contrutor porque os produtos ja estão sendo inicializado na class  

    static calculeteTotal(){
        this._total = 0 

        for (const product of this.products) {
            this._total += product.total;
        }
    }

   static addToCart(product:Product){
        //verifica se o mesmo produto esta no carrinho
        const productInCar = this._products.includes(product);

        if(!productInCar){
        this._products.push(product) //chamando o array e adicionando produto no carrinho
        }

        this.calculeteTotal(); 

    }

    static get products(){
        return this._products;
    }
    
   static get total(){
        return this._total;
    }
    
}