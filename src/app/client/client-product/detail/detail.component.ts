import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
id: any
array: any
  constructor(private phone: ProductService,
    private activRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    this.phone.firstPhone(this.id).subscribe(data=>{
        this.array = data;
    })
  }

}
