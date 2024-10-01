// importar data.json
// importar entities/product.ts
// Criar os objetos de produto utilizando os
// dados de data.json

import { Product } from "./entities/product";
import { Cart } from "./entities/cart";
import data from "../data.json";

for (const product of data){
    new Product(
        product.name,
        product.category,
        product.price,
        product.image.desktop
    ).toHtml();
}







//inicializando o produto
/* const product1 = new Product("banana", "fruta" , 10 ,"http://exemple.com");

product1.incrementQuantity(); //chamando o metodo
product1.incrementQuantity();
product1.incrementQuantity();
product1.decrementQuantaty();
console.log(Cart.products);


const product2 = new Product("maça", "fruta" , 5 ,"http://exemple.com");
product2.incrementQuantity()
product2.incrementQuantity()

console.log(Cart.products); */


