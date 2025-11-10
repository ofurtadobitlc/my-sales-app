import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MaterialModule } from "../material-module";


interface MenuItem {
  /**
  * The path that will be loaded when you click on the menu
  */
  path: string;
  /**
  * The text that will be displayed in the menu
  */
  label: string;
  /**
  * The icon that will be displayed in the menu
  */
  icon: string;
}

@Component({
  selector: 'app-menu',
  imports: [MatListModule, RouterLink, MaterialModule],
  template: `
    @for(item of menuItems ; track item.path ){
        
        <a
          mat-list-item
          [routerLink]="item.path"
          routerLinkActive="active-link"
  >
    <mat-icon matListItemIcon >{{item.icon}}</mat-icon>
    {{ item.label }}
  </a>
    }
  `,
  styles: `
    .active-link.mat-mdc-list-item {
      background-color: var(--mdc-theme-primary, #3f51b5);
      color: white;
    }
    
  `,
})
export class Menu {


  menuItems: Array<MenuItem> = [
      {
        path: '/',
        label: 'Home',
        icon: 'home'
      },
            {
        path: '/categories',
        label: 'Categories',
        icon: 'category'
      },
      {
        path: '/suppliers',
        label: 'Suppliers',
        icon: 'inventory_2'
      }
    
  ]




}
