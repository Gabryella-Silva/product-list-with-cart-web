import { Product } from "./product";

//abstrair
export class Cart{
    private _products:Product[] = [];
    private _total:number = 0;
      
//nao precisa necessariamente de um contrutor porque os produtos ja estão sendo inicializado na class  

    addToCart(product:Product){

        //verifica se o mesmo produto esta no carrinho
        const productInCar = this._products.includes(product);


        if(!productInCar){
        this._products.push(product)
            
        
        }

        //puxando do componente produto (como os objetos são privados, eles precisam do get no componente produto para serem puxados)
        this._total += product.price;
        
     //adicionandoo produto no carrinho

    }

    get products(){
        return this._products;
    }
    
    get total(){
        return this._total;
    }
    
}