//Nhập 2 số a và b 
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
//Nhập vào phép tính
let operation = prompt("Nhập phép tính (+, -, *, /):");
let result;
let isValid = true;
//Sử dụng câu điều kiện
switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = "không thể chia cho 0 !";
            } else {
            result = a / b;
            }
        break;
    default:
        isValid = false;
        alert("Phép tính không hợp lệ!");
        break;
}//Hiển thị kết quả
if (isValid) {
    alert('Kết quả: a ' + operation + ' b = ' + result);
}