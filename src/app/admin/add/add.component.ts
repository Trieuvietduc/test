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
  constructor(
    private phone: ProductService,
    private router: Router) { }
  ngOnInit(): void {
    this.array =
    {
      name: '',
      desc: '',
      price: 0,
      status: 0,
      avartar: '',
    }
  }
  onsubmit(obj: any) {
    this.phone.createProduct(obj).subscribe(data => {});
    this.router.navigate(['/admin/phone'])
  }
}
