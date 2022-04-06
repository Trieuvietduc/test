import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any;
  constructor(private phone: ProductService) { }
  ngOnInit(): void {
    this.getlist();
  }
  getlist(){
    this.phone.getProducts().subscribe(data => {
      this.list = data;
    })
  }
}
