import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any;
  products: any
  constructor(private phone: ProductService) { }
  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.phone.getProducts().subscribe(data => {
      this.list = data;
    })
  }
  del(id: number) {
    this.phone.deleteProduct(id).subscribe(data => {
      this.getlist();
    });
  }
  parentChangeStatus(newStatus: number, product: any) {
    this.phone.updatePhone(
      product.id,
      {
        ...product,
        status: newStatus
      }).subscribe((data) => {
        this.getlist();
      })
  }
}
