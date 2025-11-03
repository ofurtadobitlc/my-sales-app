import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersComponent } from './suppliers/suppliers';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
    path:'',
        component: DashboardComponent
    },
    {
        path: 'suppliers',
        component: SuppliersComponent,
        children: [
            {
                path: '',
                component: SuppliersListComponent
            }
        ]
    }

];
