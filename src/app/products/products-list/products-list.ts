import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products.dto';
import { debounceTime, distinct, distinctUntilChanged, lastValueFrom, Observable, startWith, switchMap } from 'rxjs';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartService } from '../../cart.service';
import { CartItem } from '../../cart.dto';
import { ProductServiceNew } from '../product.service-new';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-products-list',
  imports: [MaterialModule, LoadingBar, AsyncPipe, CurrencyPipe],
  templateUrl: './products-list.html',
  styles: ``,
})
export class ProductsList implements OnInit {
  productService = inject(ProductServiceNew)
  cartService = inject(CartService)
  fb = inject(FormBuilder)
  products: Product[]
  api2 = environment.api2
  productsObservable: Observable<Product[]>
  searchForm: FormGroup

  async ngOnInit(){
    this.searchForm = this.fb.group({
      searchTerm: ['']
    })

    this.searchForm.get('searchTerm').valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.productService.getAll(term))
    ).subscribe(products => {
      this.products = products
    })
     
    await this.getProducts()
  }


  private async getProducts(searchTerm: string = '') {
  this.productsObservable = this.productService.getAll(searchTerm)
  this.products = await lastValueFrom(this.productsObservable)
}

  onAddToCart(item: Product) {
    const cartItem: CartItem = {
      idProduct: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice
    }
    this.cartService.addItem(cartItem)
  }

}
