import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detai',
  templateUrl: './detai.component.html',
  styleUrls: ['./detai.component.css']
})
export class DetaiComponent implements OnInit {
  productDetali: any;
  id: any
  constructor(
    private ps: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }
//lồn
}
