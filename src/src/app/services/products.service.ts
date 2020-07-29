import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../appconfig';
import { IProduct, IProducts } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly url = AppConfig.GetApiUrl();
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.url}assets/data/products.json`);
  }
}
