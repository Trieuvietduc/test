import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {
  validateForm: any
  List: any
  serach: any
  array : any;
  constructor(private phone: ProductService) {
  }

  ngOnInit(): void {
  }
  getList() {
    this.phone.getProducts().subscribe(data => {
      this.List = data
    })
  }
  
  seacrh1(serach: any) {
    if(serach){
      this.phone.seacrh(serach).subscribe(data => {
        this.array = data
        console.log(this.array);
      })
    }else{
      alert('bạn phải nhập dữ liệu vào ô tìm kiếm')
    }
  }
}
