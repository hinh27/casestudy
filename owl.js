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
let ex =new UserName();

let AppProducts = function () {
    this.listProducts = [
["Monkey","monkey.png", "Giá: 84.990.000 VND \n"+
    "Khối lượng bản thân:101,3kg \n"+
    "Dài x Rộng x Cao:1.710 x 755 x 1.030 mm\n" +
    " Loại động cơ:PGM-FI, SOHC 4 kỳ, 1 xy lanh,làm mát bằng không khí\n "+
    "Độ cao yên: 776 mm\n"+
    "Công xuất tối đa: 6,66kw @ 7000 vòng/phút\n"+
    "Dung tích bình xăng : 5.6 lít \n"+
    "Momen cực đại : 10,5Nm @5500 vòng/phút\n"+
    "Loại truyền động: 4 số\n"],

 ["Super cub C125","cub.png","Giá:84.990.000 VND \n"+
 "Khối lượng bản thân:108kg \n"+
 "Dài x Rộng x Cao:1.910 x 718 x 1.002 mm\n" +
 " Loại động cơ:PGM-FI, SOHC 4 kỳ, 1 xy lanh,làm mát bằng không khí\n "+
 "Độ cao yên: 780 mm\n"+
 "Công xuất tối đa: 6,76kw @ 7500 vòng/phút\n"+
 "Dung tích bình xăng : 3,7 lít \n"+
 "Momen cực đại : 9,96Nm @5500 vòng/phút\n"+
 "Loại truyền động: 4 số\n"],

["SH 300cc","sh300cc.jpg","Giá:276.490.000 VND\n"+
"Khối lượng bản thân:169kg \n"+
"Dài x Rộng x Cao:2.139 x 730 x 1.195 mm\n" +
" Loại động cơ:  SOHC 4 kỳ, xy-lanh đơn 4 van ,làm mát bằng chất lỏng,đáp ứng tiêu chuẩn khí thải Euro4\n "+
"Độ cao yên: 805 mm\n"+
"Công xuất tối đa: 18,5kw @ 7500 vòng/phút\n"+
"Dung tích bình xăng : 9,1 lít \n"+
"Momen cực đại : 25,5Nm @5000 vòng/phút\n"+
"Loại truyền động: Biến thiên vô cấp\n"],

["CB300r","cb.png","Giá:140.000.000 VND\n"+
"Khối lượng bản thân:145kg \n"+
"Dài x Rộng x Cao:2.020 x 805 x 1.050 mm\n" +
" Loại động cơ: PGM-FI,DOHC,4 kỳ,1 xy-lanh,làm mát bằng dung dịch\n "+
"Độ cao yên: 800 mm\n"+
"Công xuất tối đa: 22,8kw @ 8500 vòng/phút\n"+
"Dung tích bình xăng : 10,1 lít \n"+
"Momen cực đại : 27,5Nm @6500 vòng/phút\n"+
"Loại truyền động: Côn tay 6 số\n"],
];

    this.cart = [];

    this.setLocalStorageListProducts = function () {
        sessionStorage.listProducts = JSON.stringify(this.listProducts);
    }
    ;
    this.getLocalStorageListProducts = function () {
        this.listProducts = JSON.parse(sessionStorage.listProducts);
    };


    this.addProduct = function () {
        let product = document.getElementById("newProduct").value;
        if (product === "") {
            alert("Vui long nhap vao ten.");
        } else {
            this.listProducts.push([product, ,]);
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        }
    };

    this.editProduct = function (i) {
        let temp = prompt("Nhap ten ban muon sua: ");
        if (temp.trim() === "") {
            alert("Vui long nhap vao ten san pham.");
            return;
        }
        this.listProducts[i][0] = temp;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };

    this.deleteProduct = function (i) {
        let confirmAnswer = confirm("Do you want delete " + this.listProducts[i][0] + " ?");
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


    this.displayProductsAdmin = function () {
        this.getLocalStorageListProducts();
        let sout = "";
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 50px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" ></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" value="Edit" onclick="editProduct(' + i + ')"></input></td >';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" value="Delete" onclick="deleteProduct(' + i + ')"></input></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };


};

function clearLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function editProduct(i) {
    return pro.editProduct(i);
}

function deleteProduct(i) {
    return pro.deleteProduct(i);
}


function logOut() {
    //pro.setLocalStorageListProducts();
    return window.location = "login.html"
}


let pro = new AppProducts();

function open() {
    pro.setLocalStorageListProducts();
    pro.displayProductsAdmin();

}

function open_login(){
    pro.setLocalStorageListProducts();
    log.login();

}
let log = new UserName();


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