import { Injectable } from '@angular/core';
import { productI } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getProducts(): Array<productI> {
    return [
      {
        image_url: 'images/homeGearItem.png',
        status: 'Just In',
        name: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors_number: 1,
        price: 499500,
      },
      {
        image_url: 'images/homeGearItem.png',
        status: 'Just In',
        name: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors_number: 1,
        price: 499500,
      },
      {
        image_url: 'images/homeGearItem.png',
        status: 'Just In',
        name: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors_number: 1,
        price: 499500,
      },
      {
        image_url: 'images/homeGearItem.png',
        status: 'Just In',
        name: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors_number: 1,
        price: 499500,
      },
      {
        image_url: 'images/homeGearItem.png',
        status: 'Just In',
        name: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors_number: 1,
        price: 499500,
      },
    ];
  }
}
