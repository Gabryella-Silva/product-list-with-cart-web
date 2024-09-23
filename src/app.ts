// importar data.json
// importar entities/product.ts
// Criar os objetos de produto utilizando os
// dados de data.json

import { Product } from "./entities/product";
import { Cart } from "./entities/cart";
//import data from "../data.json";

//inicializando o produto
const product1 = new Product("banana", "fruta" , 10 ,"http://exemple.com");
const product2 = new Product("maça", "fruta" , 5 ,"http://exemple.com");

const cart = new Cart();
//chamando a variavel que adiciona no carrinho
cart.addToCart(product1)
cart.addToCart(product2)
console.log(cart)
console.log(cart.products.length);
console.log(cart.total);


