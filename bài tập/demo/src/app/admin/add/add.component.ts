import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  array: any
  imageBase64: any
  list: any
  validateForm: FormGroup
  constructor(
    private phone: ProductService,
    private router: Router) {
    this.validateForm = new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(15),
        ]
      ),
      thuong_hieu: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(15)
        ]
      ),
      desc: new FormControl('',
        [
          Validators.required,
        ]
      ),
      price: new FormControl('',
        [
          Validators.required,
        ]
      ),
      avartar: new FormControl('',
        [
          Validators.required,
        ]
      ),
      status: new FormControl('',
        [
          
        ]
      )
    })
  }
  ngOnInit(): void {
  }
  getlist() {
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
  onsubmit(validateForm: any) {
    console.log(this.imageBase64);
    validateForm = {
      ...validateForm,
      avartar: this.imageBase64
    }
    console.log(validateForm);
    this.phone.createProduct(validateForm).subscribe(data => { });
    this.router.navigate(['/admin/phone']);
    this.getlist();
  }
}
