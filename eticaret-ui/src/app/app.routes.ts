import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

export const routes: Routes = [
    {path:'card-details', component: CardDetailsComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'category/:id', component: ProductListComponent},
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/products',  pathMatch: 'full'},
    {path: '**', redirectTo: '/products',  pathMatch: 'full'}
    ];
