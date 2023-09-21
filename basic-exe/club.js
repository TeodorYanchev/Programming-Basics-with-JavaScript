function club(input) {
    let index = 0;

    let targetIncome = Number(input[index]); // cel na club-a
    index++;

    let command = input[index];
    index++;

    let income = 0;  // prihodi na club-a

    while (command !== "Party!") {
        let cocktailName = command;

        let cocktailCount = Number(input[index]);
        index++;

        let pricePerCocktail = cocktailName.length;
        let totalCocktailPrice = cocktailCount * pricePerCocktail;

        if(totalCocktailPrice % 2 !== 0) {
            totalCocktailPrice *= 0.75;
        }

        income += totalCocktailPrice;

        if(income >= targetIncome) {
            console.log("Target acquired.");
            break;
        }


        command = input[index];
        index++;
    }

    if(command === "Party!") {
        let sumNeeded = targetIncome - income;
        console.log(`We need ${sumNeeded.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);
}

