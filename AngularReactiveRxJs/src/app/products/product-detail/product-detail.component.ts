import { Component, Input , OnInit, Output, EventEmitter, OnChanges,SimpleChanges} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges{
  @Input() name = '';
  @Input() product:Product | undefined;

  @Output() bought = new EventEmitter<string>();

  constructor(){
    console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //const product = changes['name'];
    const product = changes['product'];

    if(!product.isFirstChange()){
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);  
    }

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log(`Nam is ${this.name} in the ngOnInit`);
  }
  buy() {
    this.bought.emit(this.name);
  }
  get productName(): string {
    console.log(`Get ${this,this.name}`);
    return this.name;
  }
}