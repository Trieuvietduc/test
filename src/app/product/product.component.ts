import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string, 
  price: number
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    this.ps.getproducts().subscribe(data=>{
      this.product=data;
      console.log(this.product);
      
      
    })
  }

  // add 
  product = [
    {
      id: 1,
      name: 'ffff',
      price: 0,
      desc: 'fffff'
    }
  ];

  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  }
  
  delProduct = this.product
  onSubmit(product: any) {
    if (!this.onvalidate(this.newProduct)) {
      alert("bạn phải điền đủ thông tin!")
      return;
    }

    if (this.newProduct.id) {
      for (let i = 0; i < this.delProduct.length; i++)
        if (this.delProduct[i].id === this.newProduct.id) {
          this.delProduct[i] = this.newProduct
        }
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        desc: ''
      }

    } else {
      this.newProduct = {
        ...this.newProduct,
        id: this.delProduct.length + 1
      }
      console.log(this.newProduct, product);
      this.delProduct.push(this.newProduct);
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        desc: ''
      }
    }
  }

  // Edit
  Edit(event: any) {
    this.newProduct = event;
  }
  // del
  
  Del(id: number) {
    this.delProduct = this.delProduct.filter(user => user.id !== id);
  }
  // validate product
  onvalidate(obj: any) {
    if (!obj.name || !obj.price || !obj.desc) {
      return false;
    }
    return true;
  }
  
}
