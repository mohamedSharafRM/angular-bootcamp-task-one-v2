import { Component, effect, inject, OnInit, Signal } from '@angular/core';
import { IFreaturedProduct } from 'src/app/models/ifreatured-product';
import { ProductService } from 'src/app/services/product-service';
import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
import { ZardSkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { ZardAlertComponent } from '@shared/components/alert/alert.component';
import { ZardInputGroupComponent } from '@shared/components/input-group/input-group.component';
import { ZardSelectComponent } from '@shared/components/select/select.component';
import { ZardSelectItemComponent } from '@shared/components/select/select-item.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-products-list',
  imports: [FeaturedProductCard, ZardSkeletonComponent,
    ZardAlertComponent, ZardInputGroupComponent,
    ZardIconComponent],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

  productService = inject(ProductService);
  sortOrder : string = 'default';

  ngOnInit(): void {
    this.productService.getProducts();

  }
 

  get products() : Signal<IFreaturedProduct[]>{
    return this.productService.products;
  }

  get loading() : Signal<boolean>{
    return this.productService.loading;
  }

  get error() : Signal<string | null>{
    return this.productService.error;
  }
   
  get filteredData() : IFreaturedProduct[]{
    return this.productService.filteredData;
  }


}
