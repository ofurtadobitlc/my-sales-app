import { inject, Injectable } from '@angular/core';
import { ProductDataSource } from './product-data-source';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from './products.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceNew implements ProductDataSource {

    http = inject(HttpClient)

  public getAll(
    search: string = ''
  ): Observable<Product[]> {
    
    
    return this.http.get<Product[]>(
      environment.api2+'/products' 
    ).pipe(
      map(products => {
        if(search === '') return products;
        const q = search.toLowerCase()
        return products.filter(p => p.name.toLowerCase().includes(q))
      })
    )
  }


  
}
