import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from '../menu/menu';
import { CategoriesComponent } from '../categories/categories.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';
import { MatBadgeModule } from '@angular/material/badge';
import { ColorSchemeE, ColorSchemeService } from '../color-scheme-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    Menu,
    RouterOutlet,
    MatBadgeModule,
    RouterLink
  ]
})
export class HomeComponent implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);
  cartService = inject(CartService)

  public currentScheme: ColorSchemeE

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( private colorSchemeService: ColorSchemeService){
    this.currentScheme = this.colorSchemeService.get()
  }

  ngAfterViewInit(){
    this.colorSchemeService._getColorScheme()
  }

  onChangeTheme(){
    if(this.currentScheme === ColorSchemeE.Light){
      this.currentScheme = ColorSchemeE.Dark
      this.colorSchemeService.set(ColorSchemeE.Dark)
    } else{
      this.currentScheme = ColorSchemeE.Light
      this.colorSchemeService.set(ColorSchemeE.Light)
    }
  }

    

}
