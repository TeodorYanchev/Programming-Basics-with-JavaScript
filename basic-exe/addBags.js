function addBags(input) {

    let priceForLuggageOver20Kg = Number(input[0]);
    let weightOfTheLuggage = Number(input[1]);
    let daysBeforeJourney = Number(input[2]);
    let luggageCount = Number(input[3]);

    let price = 0;
    let priceIncrease = 0;

    if (weightOfTheLuggage < 10) {
        price = 0.20 * priceForLuggageOver20Kg;
    } else if (weightOfTheLuggage <= 20) {
        price = 0.50 * priceForLuggageOver20Kg;
    } else {
        price = priceForLuggageOver20Kg;
    }

    if (daysBeforeJourney > 30) {
        priceIncrease = 0.1 * price;
    } else if (daysBeforeJourney >= 7 && daysBeforeJourney <= 30) {
        priceIncrease = 0.15 * price;
    } else {
        priceIncrease = 0.40 * price;
    }

    let sum = price + priceIncrease;
    let totalSUm = sum * luggageCount;

    console.log(`The total price of bags is: ${totalSUm.toFixed(2)} lv.`);

}

addBags(["63.80",
    "23",
    "3",
    "1"])



