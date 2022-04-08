import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  array: any
  imageBase64: any
  list: any
  constructor(
    private phone: ProductService,
    private router: Router) { }
  ngOnInit(): void {
    this.array =
    {
      name: '',
      thuong_hieu: '',
      desc: '',
      price: 0,
      status: 0,
    }
  }
  getlist(){
    this.phone.getProducts().subscribe(data => {
      this.list = data;
    })
  }
  changeImage(event: any) {
    // 1. Định nghĩa việc đọc file
    const reader = new FileReader();
    // 2. Định nghĩa quá trình đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
    };

    // 3. Đọc file lấy từ input
    reader.readAsDataURL(event.target.files[0]);
  }
    onsubmit(obj: any) {
      obj ={
        ...this.array,
        avartar: this.imageBase64
      }
      this.phone.createProduct(obj).subscribe(data => {});
      this.router.navigate(['/admin/phone']);
      this.getlist();
    }
  }
