import { Component ,AfterViewInit,ViewChild} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log( this.productDetail.product);
    }
    //throw new Error('Method not implemented.');
  }

  products:Product[] = [{name:'Webcam',price:100},{name:'Microphone',price:100},{name:'Wireless keyboard',price:100},
  {name:'Plasma TV',price:100}];

  @ViewChild(ProductDetailComponent) productDetail:ProductDetailComponent|undefined;

  selectedProduct : Product|undefined;

  onBuy(){
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }  
}
