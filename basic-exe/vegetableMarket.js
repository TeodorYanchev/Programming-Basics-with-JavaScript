function vegetableMarket(input){
    let VegpricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let totalKgVeg = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let totalSum = (VegpricePerKg * totalKgVeg) + (fruitsPricePerKg * totalKgFruits);
    let euroSum = totalSum / 1.94;
    console.log(euroSum.toFixed(2));


}

vegetableMarket(["0.194",
    "19.4",
    "10",
    "10"
])