import { Component, Input } from '@angular/core';
import { Product } from '../products.dto';
import { MaterialModule } from '../../material-module';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [MaterialModule, CurrencyPipe, MatIconModule, CommonModule],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
    @Input() product: Product

    onAddToCart(product: Product){
      console.log('TODO')
    }
}
