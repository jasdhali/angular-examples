import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutInfoComponent } from './about-info/about-info.component';
import { ProductsService } from '../products/products.service';

@NgModule({
  declarations: [
    AboutInfoComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule implements OnInit{
  
  constructor(private productService:ProductsService){}
  
  ngOnInit(): void {
      this.productService.subscriber$.subscribe(data=>{
        console.log( `Inside AboutModule and data sent is ${data}`);
      })
  }
}  
