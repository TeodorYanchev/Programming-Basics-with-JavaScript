function addBags(input) {

    let priceOfLuggage = Number(input[0]);
    let kgLuggage = Number(input[1]);
    let dayBeforeTrip = Number(input[2]);
    let luggageCount = Number(input[3]);
    let sum = 0;

    if (kgLuggage < 10) {
        sum = 0.2 * priceOfLuggage;
    } else if (kgLuggage < 21) {
        sum = 0.5 * priceOfLuggage;
    } else if (kgLuggage > 20) {
        sum = priceOfLuggage;
    }

    if (dayBeforeTrip > 30) {
        sum *= 1.1;
    } else if (dayBeforeTrip >= 7 && dayBeforeTrip <= 30) {
        sum *= 1.15;
    } else if (dayBeforeTrip < 7) {
        sum *= 1.40;
    }

    let finalSum = luggageCount * sum;

    console.log(`The total price of bags is: ${finalSum.toFixed(2)} lv.`);
}

addBags(["63.80", 
"23", 
"3", 
"1"]) 