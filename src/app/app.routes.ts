import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsList } from './components/products-list/products-list';

export const routes: Routes = [
    {
        path : '',
        title : 'Home',
        component : Home,
    },
    {
        path : 'products',
        title: 'All Products',
        component : ProductsList,
    }
];
