function godzillaVsKong(input) {

let budget = Number(input[0]);
let statisticianCount = Number(input[1]);
let clothingPricePerOneST = Number(input[2]);

let decorPrice = 0.1 * budget;
let statisticianCloathPrice = statisticianCount * clothingPricePerOneST;

if (statisticianCount > 150) {
    statisticianCloathPrice = statisticianCloathPrice * 0.9
}
let totalPrice = decorPrice + statisticianCloathPrice;

if (budget >= totalPrice) {
    moneyLeft = budget - totalPrice
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    
} else {
    let moneyNeeded = totalPrice - budget
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    
}

}

godzillaVsKong(["9587.88",
"222",
"55.68"])



