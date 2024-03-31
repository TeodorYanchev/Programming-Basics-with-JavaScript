function familyTrip(input) {

    let budget = Number(input[0]);
    let overNightStay = Number(input[1]);
    let pricePerOverNight = Number(input[2]);
    let percentage = Number(input[3]);

    if (overNightStay > 7) {
        pricePerOverNight *= 0.95;
    }
    let payON = overNightStay * pricePerOverNight;
    let totalSum = payON + ((percentage / 100) * budget);

    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", 
"7", 
"66", 
"15"]) 