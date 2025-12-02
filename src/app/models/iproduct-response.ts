import { IFreaturedProduct } from "./ifreatured-product";

export interface IProductResponse {
    products : IFreaturedProduct[] ;
    total : number;
    skip : number;
    limit : number;
}
