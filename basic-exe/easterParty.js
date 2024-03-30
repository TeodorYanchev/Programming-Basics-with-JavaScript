function easterParty(input) {

    let guests = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budgetDessy = Number(input[2]);
    
    if (guests < 10) {
        pricePerPerson = pricePerPerson;
    } else if (guests <= 15) {
        pricePerPerson *= 0.85;
    } else if (guests < 21) {
        pricePerPerson *= 0.80;
    } else if (guests > 21) {
        pricePerPerson *= 0.75
    }

    let cake = 0.1 * budgetDessy;
    let placeSetting = guests * pricePerPerson;
    let totalPrice = placeSetting + cake;

    if (budgetDessy >= totalPrice) {
        let moneyLeft = budgetDessy - totalPrice;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budgetDessy;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

easterParty(["8",
    "25",
    "340"])