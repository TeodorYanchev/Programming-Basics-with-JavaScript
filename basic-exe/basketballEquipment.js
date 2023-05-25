function basketballEquipment(input) {
    let annualTax = Number(input[0])

let sneakers = annualTax - (0.4 * annualTax);
let outfit = sneakers - (0.2 * sneakers);
let ball = 1/4 * outfit;
let accessories = 1/5 * ball;

let totalPrice = annualTax + sneakers + outfit + ball + accessories;
console.log(totalPrice);


}

basketballEquipment(["550 "])