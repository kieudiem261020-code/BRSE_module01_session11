//Sử dụng prompt để nhập số
let number = parseInt(prompt("Nhập một số từ 0 đến 9"));
let result = "";
// Sử dụng cấu trúc switch/ case để kiểm tra
switch (number) {
    case 0:
        result = "Không";
        break;
    case 1:
        result = "Một";
        break;
    case 2:
        result = "Hai";
        break;
    case 3:
        result = "Ba";
        break;
    case 4:
        result = "Bốn";
        break;
    case 5:
        result = "Năm";
        break;
    case 6:
        result = "Sáu";
        break;
    case 7:
        result = "Bảy";
        break;
    case 8:
        result = "Tám";
        break;
    case 9:
        result = "Chín";
        break;
    default:
        result = "Số không hợp lệ!";
}
// Hiển thị kết quả
alert(result);