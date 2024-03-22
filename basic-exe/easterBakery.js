function easterBakery(input) {

    let pricePerKgOfDFlour = Number(input[0]);
    let kgOfFlour = Number(input[1]);
    let kgOfSugar = Number(input[2]);
    let eggsCount = Number(input[3]);
    let packetsOfYeast = Number(input[4]);

    let flourPrice = pricePerKgOfDFlour * kgOfFlour;
    let sugarPricePerKg = 0.75 * pricePerKgOfDFlour;
    let oneEggsPrice = 1.10 * pricePerKgOfDFlour;
    let yeastPacketPrice = 0.20 * sugarPricePerKg;
    let sugarPrice = sugarPricePerKg * kgOfSugar;
    let eggsPrice = oneEggsPrice * eggsCount;
    let yeastPrice = yeastPacketPrice * packetsOfYeast;

    let totalPrice = yeastPrice + eggsPrice + sugarPrice + flourPrice;
    console.log(totalPrice.toFixed(2));

}

easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"]) 