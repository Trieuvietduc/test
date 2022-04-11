import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
  List: any
  constructor(private phone: ProductService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.phone.getProducts().subscribe(data=>{
      this.List = data
    }) 
  }
}
