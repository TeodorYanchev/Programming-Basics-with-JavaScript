function birthDayParty(input) {

    let rentPrice = Number(input[0]);

    let cakePrice = 0.20 * rentPrice;
    let drinksPrice = cakePrice - (0.45 * cakePrice);
    let animator = 1 / 3 * rentPrice;

    let totalSum = rentPrice + cakePrice + drinksPrice + animator;
    console.log(totalSum);

}

birthDayParty(["2250"]);