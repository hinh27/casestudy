let UserName = function () {
    this.arrAdmin = [["admin", "admin1"], ["honda", "honda123"]];
    this.login = function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username.trim() === '') {
            alert("Please input username.");
        }
        else if (password.trim() === '')
        {
            alert("Please input password.");
        } else
            {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    alert("Welcome " + this.arrAdmin[0][i] + " to HONDA VIETNAM!");
                    return window.location = "new.html";
                }
            }
            for (let i = 0; i < this.arrUser[0].length; i++) {
                if (username === this.arrUser[0][i] && password === this.arrUser[1][i]) {
                    alert("Welcome " + this.arrUser[0][i] + " to HONDA VIETNAM!");
                    return window.location.ass = "new.html";
                }
            }
            alert("Username or password is incorect.");
        //   clearLogin();
        }
    };
};

let AppProducts = function () {
    this.listProducts = [
["Monkey","monkey.png", "Giá: 84.990.000 VND  <br> "  +
    "Khối lượng bản thân:101,3kg <br> "+
    "Dài x Rộng x Cao:1.710 x 755 x 1.030 mm<br> " +
    " Loại động cơ:PGM-FI, SOHC 4 kỳ, 1 xy lanh,làm mát bằng không khí<br> "+
    "Độ cao yên: 776 mm<br> "+
    "Công xuất tối đa: 6,66kw @ 7000 vòng/phút<br> "+
    "Dung tích bình xăng : 5.6 lít <br> "+
    "Momen cực đại : 10,5Nm @5500 vòng/phút<br> "+
    "Loại truyền động: 4 số<br> "],

 ["Super cub C125","cub.png","Giá:84.990.000 VND <br> "+
 "Khối lượng bản thân:108kg <br> "+
 "Dài x Rộng x Cao:1.910 x 718 x 1.002 mm<br> " +
 " Loại động cơ:PGM-FI, SOHC 4 kỳ, 1 xy lanh,làm mát bằng không khí<br>  "+
 "Độ cao yên: 780 mm<br> "+
 "Công xuất tối đa: 6,76kw @ 7500 vòng/phút<br> "+
 "Dung tích bình xăng : 3,7 lít <br> "+
 "Momen cực đại : 9,96Nm @5500 vòng/phút<br> "+
 "Loại truyền động: 4 số<br> "],

["SH 300cc","sh300cc.jpg","Giá:276.490.000 VND<br> "+
"Khối lượng bản thân:169kg <br> "+
"Dài x Rộng x Cao:2.139 x 730 x 1.195 mm<br> " +
" Loại động cơ:  SOHC 4 kỳ, xy-lanh đơn 4 van ,làm mát bằng chất lỏng,đáp ứng tiêu chuẩn khí thải Euro4<br> "+
"Độ cao yên: 805 mm<br> "+
"Công xuất tối đa: 18,5kw @ 7500 vòng/phút<br> "+
"Dung tích bình xăng : 9,1 lít <br> "+
"Momen cực đại : 25,5Nm @5000 vòng/phút<br> "+
"Loại truyền động: Biến thiên vô cấp<br> "],

["CB300r","cb.png","Giá:140.000.000 VND<br> "+
"Khối lượng bản thân:145kg <br> "+
"Dài x Rộng x Cao:2.020 x 805 x 1.050 mm<br> " +
" Loại động cơ: PGM-FI,DOHC,4 kỳ,1 xy-lanh,làm mát bằng dung dịch<br>  "+
"Độ cao yên: 800 mm<br> "+
"Công xuất tối đa: 22,8kw @ 8500 vòng/phút<br> "+
"Dung tích bình xăng : 10,1 lít <br> "+
"Momen cực đại : 27,5Nm @6500 vòng/phút<br> "+
"Loại truyền động: Côn tay 6 số<br> "],
];


    this.cart = [];
    this.setLocalStorageListProducts = function () {
        sessionStorage.listProducts = JSON.stringify(this.listProducts);
    };
    this.getLocalStorageListProducts = function () {
        this.listProducts = JSON.parse(sessionStorage.listProducts);
    };
    this.setLocalStorageCart = function () {
        sessionStorage.cart = JSON.stringify(this.cart);
    };
    this.getLocalStorageCart = function () {
        this.cart = JSON.parse(sessionStorage.cart);
    };




    this.editProduct = function (i) {
        let temp = prompt(" Nhập tên muốn sửa: ");
        if (temp.trim() === "") {
            alert("Vui long nhap vao ten san pham.");
            return;

        }
        this.listProducts[i][0] = temp;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };



    this.deleteProduct = function (i) {
        let confirmAnswer = confirm(" Bạn muốn xóa " + this.listProducts[i][0] + " ?");
        if (confirmAnswer) {
            let arr1 = [];
            let x = 0;
            while (x < this.listProducts.length) {
                if (x == i) {
                    x++;
                    continue;
                } else {
                    arr1.push(this.listProducts[x]);
                    x++;
                }
            }
            this.listProducts = arr1;
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        } else {
            return;
        }
    };


    this.displayProducts = function () {
        this.getLocalStorageListProducts();
        let sout = "";
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 40px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="images1/' + this.listProducts[i][1] + '" width="300" height="300" title="' + this.listProducts[i][2] + '"></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };

    this.displayProductsAdmin = function () {
        this.getLocalStorageListProducts();
        let sout = "";
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 70px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 200px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td width="500" height="100">' +  this.listProducts[i][2]  +'</td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="450" height="300" ></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input  type="button" value="Sửa" onclick="editProduct(' + i + ')"></input></td >';
            sout = sout + '<td style="width: 80px; text-align: center"><input  type="button" value="Xóa" onclick="deleteProduct(' + i + ')"></input></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };

    this.add = function () {
        el = document.getElementById('add-name');
        var product = el.value;
        if (product) {
            this.products.push(product.trim());
            el.value = '';
            this.fetchAll();
        }
    };
    };

function editProduct(i) {
    return pro.editProduct(i);
}

function deleteProduct(i) {
    return pro.deleteProduct(i);
}

function logOut() {
    pro.setLocalStorageListProducts();
    return window.location = "login.html"
}
let pro = new AppProducts();
function open() {
    pro.setLocalStorageListProducts();
    pro.displayProductsAdmin();

}


let log = new UserName();


//slide ảnh
let i=0;
let image1=[];
let time=2000;
image1[0]='bia1.jpg';
image1[1]='bia2.jpg';
image1[2]='bia3.jpg';
image1[3]='bia4.jpg';
image1[4]='bia5.jpg';
function changImage() {
    document.slide.src=image1[i];
    if (i<image1.length-1) {
        i++;
    }
    else {
        i=0;
    }
    setTimeout('changImage()',time);
}
changImage();
