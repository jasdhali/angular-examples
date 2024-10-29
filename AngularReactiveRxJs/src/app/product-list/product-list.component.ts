import { AfterViewInit, Component , ViewChild ,OnInit} from '@angular/core';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';


@Component({
  viewProviders:[ProductsService],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit,OnInit {
  ngOnInit(): void {
      //this.products  = this.productService.getProducts();
      this.getProducts();
  }
  ngAfterViewInit(): void {
    if( this.productDetail) {
      console.log( this.productDetail.product);
    }
    //throw new Error('Method not implemented.');
  }

  trackByProducts(index:number,name:string): string{
    console.log(`Product name ${name}`);
    return name;
  }

  //products = ['webcam','mic','wireless keyboard'];  
  //products = [
  //  {name:'webcam',price:100},{name:'mic',price:100},{name:'wireless keyboard',price:100},{name:'apple airpods',price:150}];
  
  selectedProduct: Product|undefined;
  products:Product[] = [];
  //private productService:ProductsService;
  @ViewChild(ProductDetailComponent) productDetail:ProductDetailComponent|undefined;
  
  today = new Date();

  onBuy(name:string){
    window.alert(`You just bought ${name}`);
  }
  private getProducts(){
    this.productService.getProducts().subscribe( products=>{
      this.products = products;
    })
  }
  constructor(private productService: ProductsService){ }

}
