import { Injectable } from '@angular/core';
import { Product } from './product';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private products = [
    { name: 'webcam', price: 100 },
    { name: 'mic', price: 100 },
    { name: 'wireless keyboard', price: 100 },
    { name: 'apple airpods', price: 150 },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products)
    ;
  }
}
