import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  edit: FormGroup
  constructor(private phone: ProductService,
    private activRoute: ActivatedRoute,
    private router: Router) {
      this.edit = new FormGroup({
        name: new FormControl(''),
        thuong_hieu: new FormControl(''),
        desc: new FormControl(''),
        price: new FormControl(''),
        avartar: new FormControl(''),
        status: new FormControl('')
      })
     }
  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    this.phone.firstPhone(this.id).subscribe(data => {
      this.firstproduct = data;
      this.beforeImg(this.firstproduct.avartar)
    })
  }
  beforeImg(event: any){
    this.imageBase64 = event
  }
  oneGit(){
    this.phone.getProducts().subscribe(data=>{
        this.list = data
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
  onUpdate(edit: any) {
    edit = {
      ...edit,
      avartar: this.imageBase64,
      status: Number(edit.status),
      price: Number(edit.price)
    }
    console.log(edit);
    this.phone.updatePhone(this.id, edit).subscribe();
    this.oneGit();
    
    return this.router.navigate(['admin/phone']);
    
  }
}
