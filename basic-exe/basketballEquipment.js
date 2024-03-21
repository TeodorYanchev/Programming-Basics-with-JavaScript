function basketballEquipment(input) {

    let annualFee = Number(input[0]);

    let shoes = annualFee - (annualFee * 0.4);
    let basketballUniform = shoes - (shoes * 0.2);
    let ball = 1 / 4 * basketballUniform;
    let accessories = 1 / 5 * ball;

    let totalPrice = annualFee + shoes + basketballUniform + ball + accessories;
    console.log(totalPrice.toFixed(2));
}

basketballEquipment(["550"])