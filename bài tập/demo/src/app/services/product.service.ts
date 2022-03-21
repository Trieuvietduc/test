import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
 const appApi = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    
   }
   getproducts(): Observable<any> {
    return this.http.get(appApi)
  }
  getProducts(id: number| string): Observable<any> {
    return this.http.get(`${appApi}/${id}`)
  }
}
