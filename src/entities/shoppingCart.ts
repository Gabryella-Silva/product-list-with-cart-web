import { v4 as uuidv4 } from "uuid";
import { Product } from "./product";

//abstrair
export class shoppingCart{
    private _id:string = uuidv4();
    private _name:string
    private _price:number;
    private _total:number;
    private _quantity:number;  
    private cart[]

    //implementar
    constructor(name:string, price:number, total:number,quantity:number ){
        this._name = name;
        this._price = price;
        this._quantity = quantity
        this._total = total;
    }

    

    addToCart(product:Product){
     

    }
}