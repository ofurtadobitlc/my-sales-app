import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';


interface MenuItem {
  /**
  * The path that will be loaded when you click on the menu
  */
  path: string;
  /**
  * The text that will be displayed in the menu
  */
  label: string;
}

@Component({
  selector: 'app-menu',
  imports: [MatListModule, RouterLink],
  template: `
    @for(item of menuItems ; track item.path ){
        <a
          mat-list-item
          [routerLink]="item.path"
          routerLinkActive="active-link"
  >
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
        label: 'Home'
      },
            {
        path: '/categories',
        label: 'Categories'
      },
      {
        path: '/suppliers',
        label: 'Suppliers'
      }
    
  ]




}
