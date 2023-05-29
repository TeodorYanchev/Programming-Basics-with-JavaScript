function shopping(input) {

    let peterBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = processorsCount * (0.35 * videoCardsPrice);
    let ramMmoryPrice = ramMemoryCount * (0.1 * videoCardsPrice);

    let totalSum = videoCardsPrice + processorsPrice + ramMmoryPrice;

    if (videoCardsCount > processorsCount) {
       totalSum = 0.85 * totalSum
    }

    if (peterBudget >= totalSum) {
        let moneyLeft = peterBudget - totalSum
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - peterBudget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }






}

shopping(["920.45",
"3",
"1",
"1"])

