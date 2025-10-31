import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Category {
  constructor(private http: HttpClient){}

  public getAll(){
    return this.http.get(environment.api + "categories")
  }
}
