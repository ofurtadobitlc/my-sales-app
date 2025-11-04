import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './products.html',
  styles: ``,
})
export class ProductsComponent {

}
