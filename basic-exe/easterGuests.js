function easterGuests(input) {

    let guestsCount = Number(input[0]);
    let budgetLybo = Number(input[1]);

    let easterBread = Math.ceil(guestsCount / 3);
    let easterBreadPrice = easterBread * 4;
    let eggs = guestsCount * 2;
    let eggsPrice = eggs * 0.45;
    let sumLybo = easterBreadPrice + eggsPrice;

    if (budgetLybo >= sumLybo) {
        let moneyLeft = budgetLybo - sumLybo;
        console.log(`Lyubo bought ${easterBread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded = sumLybo - budgetLybo;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }
}
easterGuests(["9", 
"12"]) 