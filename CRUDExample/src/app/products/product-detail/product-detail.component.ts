import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {

  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();
  @Input() id = -1;
  product$:Observable<Product> | undefined;

  ngOnChangesOld(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  ngOnChanges(): void {
      this.product$ = this.productService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

  remove() {
    console.log('Removed');
    }
  constructor(private productService:ProductsService,public authService:AuthService){}

}
