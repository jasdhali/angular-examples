import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private productService:ProductsService){}
  ngOnInit(): void {
      this.productService.subscriber$.subscribe(data=>{
        console.log( data );
      })
  }
}
