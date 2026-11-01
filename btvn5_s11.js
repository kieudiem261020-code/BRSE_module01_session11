let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));
//kiểm tra tính hợp lệ của dữ liệu nhập vào
if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Vui lòng nhập cân nặng và chiều cao hợp lệ!");
} else {
    let bmi = weight / (height * height);
    let classification = "";
//phân loại theo chuẩn BMI
    if (bmi < 18.5) {
        classification = "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 25) {
        classification = "Bình thường";
    } else if (bmi >= 25 && bmi < 30) {
        classification = "Thừa cân/ Tiền béo phì";
    } else if (bmi >= 30 && bmi < 35) {
        classification = "Béo phì độ 1";
    } else if (bmi >= 35 && bmi < 40) {
        classification = "Béo phì độ 2";
    } else {
        classification = "Béo phì độ 3";
    }
    // hiển thị kết quả
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "\nPhân loại: " + classification);
}  