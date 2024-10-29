import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return [
      { name: 'webcam', price: 100 },
      { name: 'mic', price: 100 },
      { name: 'wireless keyboard', price: 100 },
      { name: 'apple airpods', price: 150 },
    ];
  }
}
