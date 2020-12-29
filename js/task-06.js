let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

console.log(message);