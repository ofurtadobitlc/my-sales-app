import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  http = inject(HttpClient)

  public getAll(
    search: string = ''
  ): Observable<Product[]> {
    const searchTerm = search != '' ? '&q=' + search : ''
    
    return this.http.get<Product[]>(
      environment.api + 'products?_expand=category&_expand=supplier' + searchTerm
    )
  }

}
