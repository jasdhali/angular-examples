import { Component, Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    const product =  changes['product'];
    if(!product.isFirstChange()){
      const newValue = product.currentValue;
      const oldValue = product.previousValue;
      console.log(` Proprty's old and mew value are ${oldValue} and ${newValue} respectively............`);  
    }
    //throw new Error('Method not implemented.');
  }
  @Input() product:Product|undefined;
  namename:string = "xyz";
  @Output() bought = new EventEmitter<string>();

  buy(){
    //this.bought.emit( this.name );
  }
}
