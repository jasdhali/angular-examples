import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
