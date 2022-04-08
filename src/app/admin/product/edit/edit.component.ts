import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  firstproduct: any
  list: any
  imageBase64: any
  constructor(private phone: ProductService,
    private activRoute: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    this.phone.firstPhone(this.id).subscribe(data => {
      this.firstproduct = data;
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
  onUpdate(obj: any) {
    console.log(obj);
    obj ={
      ...obj,
      avartar: this.imageBase64
    }
    this.phone.updatePhone(this.id, obj).subscribe()
    this.router.navigate(['/admin/phone']);
    console.log(this.list);

  }
}
