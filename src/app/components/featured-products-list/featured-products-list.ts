import { Component, OnInit } from '@angular/core';
import { FEATURED_PRODUCTS, IFreaturedProduct } from 'src/app/models/ifreatured-product';
import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
import { ZardSkeletonComponent } from '@shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-featured-products-list',
  imports: [FeaturedProductCard,ZardSkeletonComponent],
  templateUrl: './featured-products-list.html',
  styleUrl: './featured-products-list.css',
})
export class FeaturedProductsList implements OnInit{

  products : IFreaturedProduct[] =  [];
  isLoading : boolean = true ; 

  ngOnInit(): void {
    setTimeout(() => {
      this.products = FEATURED_PRODUCTS;
      this.isLoading = false; 
    }, 2000);
  }
}
