import * as products from './products.json';

class Product {
  id: number;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(precioTope: number) {

    return products.filter((p) => {
      if (p.price < precioTope) {
        return p;
      }
    });

  }



}

class User {
  name: string;
  products: Product[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    // this.products.push(newProducts);

    const copia = this.products;
    this.products = copia.concat(newProducts);


    //for (let i = 0; i < newProducts.length; i++) {
    //this.products.push(newProducts[i]);

    //}
  }
}

export { User, Product };
