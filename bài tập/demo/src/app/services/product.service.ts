import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const productApi = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  getProducts() {
    return this.http.get(productApi);
  }
  createProduct(data: any) {
    return this.http.post(productApi, data);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${productApi}/${id}`);
  }
  firstPhone(id: number) {
    return this.http.get(`${productApi}/${id}`);
  }
  updatePhone(id: number, data: any) {
    return this.http.put(`${productApi}/${id}`, data);
  }
  // seacrh(seacrh: any){
  //   console.log(seacrh);
  //   return this.http.get(productApi + "?search=" + seacrh)
  // }
  seacrh(seacrh: any) {
    console.log(seacrh);
    return this.http.get(`${productApi}?search=${seacrh}`);
  }
}
