import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProductResponse } from '../models/iproduct-response';
import { IFreaturedProduct } from '../models/ifreatured-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'https://dummyjson.com/products';
  private http = inject(HttpClient);

  readonly products = signal<IFreaturedProduct[]>([]);
  readonly error = signal<string | null>(null);
  readonly loading = signal<boolean>(false);
  

  filteredData : IFreaturedProduct[] = [];
  sortOrder : string = 'default';

  getProducts() : void{

    this.loading.set(true);
    this.error.set(null);
     this.http.get<IProductResponse>(this.API_URL).subscribe({
      next : (response) =>{
        const mappedProducts = response.products.map((product) => product);
        this.products.set(mappedProducts);
        this.filteredData = mappedProducts;
        this.loading.set(false);
      }, error : (err) =>{
        this.loading.set(false);
        this.error.set('Failed to load products');
      }
    })
  }
  
  applySearch(event : Event):void{
    let searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredData = this.products().filter(product => product.title.toLowerCase().includes(searchTerm));
    this.applySorting();
  }


  applySorting():void{
    if(this.sortOrder === 'priceLowHigh'){
      this.filteredData = this.filteredData.sort((a,b) => a.price - b.price);
    }
    else if (this.sortOrder === 'priceHighLow'){
      this.filteredData = this.filteredData.sort((a,b) => b.price - a.price);
    }
    else{
      this.filteredData = this.filteredData.sort((a,b) => a.id - b.id);
    }
  }

  sortProducts(event : Event) : void{
    this.sortOrder = (event.target as HTMLSelectElement).value;
    this.applySorting();
  }
}
