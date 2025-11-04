import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [MaterialModule, LoadingBar, AsyncPipe, CurrencyPipe],
  templateUrl: './products-list.html',
  styles: ``,
})
export class ProductsList implements OnInit {
  productService = inject(ProductService)
  fb = inject(FormBuilder)
  products: Product[]
  productsObservable: Observable<Product[]>
  searchForm: FormGroup

  async ngOnInit(){
    this.searchForm = this.fb.group({
      searchTerm: ['']
    })

     this.getProducts()

  }

  private async getProducts(searchTerm?: string) {
    this.productsObservable = this.productService.getAll(searchTerm)
    this.products = await lastValueFrom(this.productsObservable)
  }

  onSearch() {
    this.getProducts(this.searchForm.value.searchTerm)
  }

}
