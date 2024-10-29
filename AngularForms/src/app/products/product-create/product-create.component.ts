import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  createProduct(name: string, price: number) {
    this.productsService.addProduct(name, price).subscribe(product => {
      this.added.emit(product);
    });
  }

}
