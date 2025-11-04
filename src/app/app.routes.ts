import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersComponent } from './suppliers/suppliers';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new';
import { ProductsComponent } from './products/products.component';
import { ProductsList } from './products/products-list/products-list';
import { CheckoutComponent } from './checkout/checkout';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path:'',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductsList
            }
        ]
    },
    {
        path: 'suppliers',
        component: SuppliersComponent,
        children: [
            {
                path: '',
                component: SuppliersListComponent
            },
            {
                path: 'show/:id',
                component: SuppliersShowComponent
            },
            {
                path: 'edit/:id',
                component: SuppliersEditComponent
            },
            {
                path: 'del/:id',
                component: SuppliersDeleteComponent
            },
            {
                path: 'new',
                component: SuppliersNewComponent
            },
        ]
    },
    { 
        path: 'checkout', 
        component: CheckoutComponent 
    },

];
