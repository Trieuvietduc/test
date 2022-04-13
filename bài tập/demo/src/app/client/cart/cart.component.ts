import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart: any
  list: any
  chuoi: any
  constructor(private phone: ProductService) { }

  ngOnInit(): void {
    this.myCart = localStorage.getItem('myCart')
    this.myCart = JSON.parse(this.myCart)
    // console.log(this.myCart);
    this.chuoi = ''
    // for (let i = 0; i < Object.keys(this.myCart).length; i++) {

    //   if (this.chuoi.length > 0) {
    //     this.chuoi = '&'
    //     this.chuoi = 'id=' + i
    //   }
    //   this.phone.firstPhone1(this.chuoi).subscribe(data => {
    //     this.list = data;
    //   })
    // }
    Object.keys(this.myCart).forEach(key => {
      if (this.chuoi.length > 0) {
        this.chuoi += '&'
        this.chuoi += 'id=' + key
      }
    })
    this.phone.firstPhone1(this.chuoi).subscribe(data => {
      this.list = data;
    })
    console.log(this.list);
    
  }
}
