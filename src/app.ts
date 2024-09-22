// importar data.json
// importar entities/product.ts
// Criar os objetos de produto utilizando os
// dados de data.json

import { Product } from "./entities/product";
import { shoppingCart } from "./entities/shoppingCart";
import data from "../data.json";

/* interface Product {
    name: string;  // Generalize para aceitar qualquer nome de produto
    category: string;
    price: number;
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  

const products: Product[] = data;

// Exemplo: Iterar pelos produtos e exibir os nomes no console
products.forEach(product => {
    console.log(product.name, product.price);
}) */

console.log(data[0].name);
