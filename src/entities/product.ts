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

  toHtml(){
    const productListHtml = document.getElementById("product-list")

    if(!productListHtml) return;

    const productHtml = document.createElement("li");
    productHtml.id = this._id;

    productHtml.innerHTML = `
        <div class="rounded-xl overflow-hidden flex flex-col border border-black h-[270px] w-[250px]">
          <div class="mb-10 relative h-full bg-red-500">
            <div class="">img</div>
            <button id="button-add-to-cart" type="button" class="button rounded-lg text-white font-medium text-xs bg-red-400">Add to
              Cart</button>
          </div>

          <div class="flex flex-col">
            <span class="product-category">${this._category}</span>
            <span class="product-name text-xl font-medium">${this._name}</span>
            <span class="product-price">$${this._price}</span>
          </div>
        </div>
    `;

    const buttonAddToCartHtml = productHtml.querySelector("#button-add-to-cart");
    buttonAddToCartHtml?.addEventListener("click" , () => this.incrementQuantity());

    productHtml.appendChild(productHtml);





  }




  get id(){
    return this._id;
  }
  
  get quantity(){
    return this._quantity
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

  get price(){
    return this._price;

  }
}

