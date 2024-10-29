import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  simpleCall(){
    console.log('simpleCall() called');
    this.productService.emitData('simple');
  }
  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product);
  }

  onDelete() {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
