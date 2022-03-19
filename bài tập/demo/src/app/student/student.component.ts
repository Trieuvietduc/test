import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }
  title = 'demo';
  subttle = 'bảng dữ liệu';
  user = {
    id: 1,
    name: "đức",
    cannag: 30,
    chieucao: "000009987",
    anh: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",

  };
  users = [
    {
      id: 1,
      name: "đức",
      cannag: 10,
      chieucao: "000009987",
      anh: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
    },
    {
      id: 2,
      name: "khánh",
      cannag: 20,
      chieucao: "000009987",
      anh: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
    },
    {
      id: 3,
      name: "hiếu",
      cannag: 30,
      chieucao: "000009987",
      anh: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
    }
  ];
  remove(id: number) {
    // cập nhật thay thế  this.arrayfill
    if (this.arrayfill[0]['cannag'] > 30) {
      alert('k cho xóa');
    } else {
      this.arrayfill = this.arrayfill.filter(user => user.id !== id);
    }
  }
  // seach
  array = '';
  // lấy tất cả các phẩn tử và gán vào 1 biên smowis
  arrayfill = this.users;
  onsearch(event: any) {
    this.array = event.target.value;
    this.arrayfill = this.users.filter(user => {
      //1 chuyển tên và value về dang viết thường
      //2 vs search.trim tiền hành xóa khoảng trắng 2 phía
      const usetsnamecase = user.name.toLowerCase();
      const searchusetsnamecase = this.array.toLowerCase().trim();
      return usetsnamecase.indexOf(searchusetsnamecase) !== -1
    });
  }
  newUsers = {
    id: 0,
    name: '',
    cannag: 0,
    chieucao: '',
    anh: ''
  }
  // data1 = '';
  // data = [
  //   ...this.users
  // ];
  add(event: any, key: string) {
    const array = event.target.value;
    this.newUsers = {
      ...this.newUsers,
      [key]: array
    }
    console.log(this.newUsers);
  }
  submit() {
    // validate trc khi cập nhật dữ liệu
    if (!this.onvalidate(this.newUsers)) {
      // nếu k đạt yêu cầu thì sẽ return ra khỏi hàm 
      // kiểm tra xem this.newUses xem có id k
      alert("bạn phải điền đủ thông tin!")
      return;
    }
    if (this.newUsers.id) {
      // nếu có id thì chỉnh sửa
      // tìm phần tử có id là id đang chỉnh sửa
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUsers.id)
          this.users[i] = this.newUsers;
      }
    } else {
      this.newUsers = {
        ...this.newUsers,
        id: this.users.length + 1,
      }
      // console.log(this.newUsers.cannag);
      this.users.push(this.newUsers)
      // nếu this.users == [...this.users] thì sẽ k hiển thị đc
      // cập nhật dự liệu newusers
    }
    // thêm dữ liệu vào mảng this.users
    this.newUsers = {
      id: 0,
      name: '',
      cannag: 0,
      chieucao: '',
      anh: ''
    }
  }
  onvalidate(obj: any) {
    if (!obj.name || !obj.cannag || !obj.chieucao || !obj.anh) {
      return false;
    }
    return true;
  }
  Edit(users: any) {
    this.newUsers = users;
  }
}
