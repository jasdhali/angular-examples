import { Component ,AfterViewInit,ViewChild} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log( this.productDetail.product);
    }
    //throw new Error('Method not implemented.');
  }

  //products:Product[] = [{name:'Webcam',price:100},{name:'Microphone',price:100},{name:'Wireless keyboard',price:100},
  //{name:'Plasma TV',price:100}];
  products:Product[] = [];
  private productService:ProductsService;
  @ViewChild(ProductDetailComponent) productDetail:ProductDetailComponent|undefined;

  selectedProduct : Product|undefined;

  onBuy(){
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }  
  constructor(){
    this.productService = new ProductsService();
    this.products = this.productService.getProducts();
  }
}
