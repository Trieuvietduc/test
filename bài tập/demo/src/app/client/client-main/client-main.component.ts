import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
  List: any
  myCart: any
  constructor(private phone: ProductService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.phone.getProducts().subscribe(data=>{
      this.List = data
    }) 
  }
  mua(id: number){
    console.log(id);
    //1. Đọc dữ liệu từ localstorage, nếu có biển cart thì lấy dữ liệu ra, ko có thì tạo nói
    this.myCart = localStorage.getItem('myCart');
    if (this.myCart == null) {
        // chưa có trang giả hàng
        this.myCart = {}; // tạo đối tượng răng
    } else {
      this.myCart = JSON.parse(this.myCart) // nấu đã cá đữ 11ệu rài thì chuyển thành đãi tượng json
    }
    // 112. Kiến tra id sản phản cần mua, náu có trong gió hàng thì cộng số lượng,
    // / chưa có thì gản số lượng là 1
    if (this.myCart[id] != undefined) {
      this.myCart[id] = this.myCart[id] + 1
    } else {
      this.myCart[id] = 1;
    }
    console.log("myCart Sau khi cộng thân");
    console.log(this.myCart);
    // /13. Cập nhật lại localstoraga
    localStorage.setItem("myCart", JSON.stringify(this.myCart))
  }
}
