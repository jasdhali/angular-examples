import { Component,OnInit ,Host,Optional} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit{
  products:Observable<Product[]> = [];
  
  constructor(@Host() @Optional() private productService:ProductsService){}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    //throw new Error('Method not implemented.');
  }
}