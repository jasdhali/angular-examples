import { Component, Input , OnInit, Output, EventEmitter, OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges{
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();
  constructor(){
    console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
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