function foodDelivery(input) {

let chickenMenu = Number(input[0])
let fishMenu = Number(input[1])
let vegMenu = Number(input[2])

let chickenMenuPrice = chickenMenu * 10.35;
let fishMenuPrice = fishMenu * 12.40;
let vegMenuPrice = vegMenu * 8.15;

let totalPrice = chickenMenuPrice + fishMenuPrice + vegMenuPrice;
let dessert = 0.2 * totalPrice

finalPrice = totalPrice + dessert + 2.50;
console.log(`${finalPrice}`);

}

foodDelivery(["9 ",
"2 ",
"6 "]
)