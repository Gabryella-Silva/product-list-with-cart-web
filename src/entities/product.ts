import { v4 as uuidv4 } from "uuid";
import { Cart } from "./cart";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _category: string;
  private _price: number 
  private _imageUrl: string;
  private _quantity:number = 0;
  private _total:number = 0;

  constructor(name: string, category: string, price: number, imageUrl: string) {
    this._name = name;
    this._category = category;
    this._price = price;
    this._imageUrl = imageUrl;
  }
  
  get total(){
   return this._total;
  }

  calculateTotal(){
    this._total =this._quantity * this._price //fez o método para calcular o quantidade multiplicada pelo preço
  }

  incrementQuantity(){
     this._quantity ++; // ou +=1
     this.calculateTotal(); // chamou o metodo para calcular junto com o aumento da quantidade

    Cart.addToCart(this);   //this é todo o objeto do conteúdo de cart
  }

  decrementQuantaty(){
    this._quantity --; //ou -=1
    this.calculateTotal(); //ou com a dimunuição da quantidade

  }
}

