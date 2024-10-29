import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
//import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    //FavoritesComponent,
    ProductViewComponent,    
  ],
  imports: [
    CommonModule,    
  ],
  exports: []
})
export class ProductsModule { }
