function mua(id) {
    console.log(id);
    //1. Đọc dữ liệu từ localstorage, nếu có biển cart thì lấy dữ liệu ra, ko có thì tạo nói
    myCart = localStorage.getItem('myCart');
    if (myCart == null) {
        // chưa có trang giả hàng
        myCart = {}; // tạo đối tượng răng
    } else {
        myCart = JSON.parse(myCart) // nấu đã cá đữ 11ệu rài thì chuyển thành đãi tượng json
    }
    // 112. Kiến tra id sản phản cần mua, náu có trong gió hàng thì cộng số lượng,
    // / chưa có thì gản số lượng là 1
    if (myCart[id] != undefined) {
        myCart[id] = myCart[id] + 1
    } else {
        myCart[id] = 1;
    }
    console.log("myCart Sau khi cộng thân");
    console.log(myCart);
    // /13. Cập nhật lại localstoraga
    localStorage.setItem("myCart", JSON.stringify(myCart))
}