function fishingBoat(input){
let budget = Number(input[0]);
let season = input[1];
let fishersCount = Number(input[2]);
let sum = 0;

if(season === "Spring"){
    sum = 3000;
} else if(season === "Summer" || season === "Autumn"){
    sum = 4200;
} else if(season === "Winter"){
    sum = 2600;
}

if(fishersCount <= 6){
    sum *= 0.9;
} else if(fishersCount <= 11){
    sum*= 0.85;
} else if(fishersCount > 12){
    sum *= 0.75;
}

if(fishersCount % 2 == 0 && season !== "Autumn"){
    sum *= 0.95;
} 
    


if(budget >= sum){
    let moneyLeft = budget - sum;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
} else {
    let moneyNeeded = sum - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}


}

fishingBoat(["3600",
"Autumn",
"6"])




