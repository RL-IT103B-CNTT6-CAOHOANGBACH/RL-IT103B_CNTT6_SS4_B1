// Lỗi 1:
// Điều kiện cupIndex < orderQuantity khiến vòng lặp chỉ chạy 2 lần trong khi orderQuantity=3, nên bị thiếu 1 ly.
// Lỗi 2:
// Giảm giá thành viên được đặt bên trong vòng lặp nên tổng tiền bị giảm 10% sau mỗi lần tính một ly,dẫn đến giảm giá nhiều lần.
// He thong POS quay thu ngan Highlands Coffee
const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge=0;
if (drinkSize === "M") sizeUpcharge = 6000;
else if (drinkSize === "L") sizeUpcharge = 10000;

// Tính tiền 1 ly hoàn chỉnh
const singleCupPrice = basePrice + sizeUpcharge + toppingsPerCup * toppingPrice;

let totalBill = 0;
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}
if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log("Tổng thanh toán:", totalBill, "VNĐ");
