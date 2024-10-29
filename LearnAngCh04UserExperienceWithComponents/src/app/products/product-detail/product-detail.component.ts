import { Component, Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    const nameObject =  changes['name'];
    const newValue = nameObject.currentValue;
    const oldValue = nameObject.previousValue;
    console.log(` Proprty's old and mew value are ${oldValue} and ${newValue} respectively............`);
    //throw new Error('Method not implemented.');
  }
  @Input() name = '';
  namename:string = "xyz";
  @Output() bought = new EventEmitter<string>();

  buy(){
    this.bought.emit( this.name );
  }
}
