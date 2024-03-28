function club(input) {
    let wishingForProfit = Number(input[0]);
    let sum = 0;

    for (let index = 1; index < input.length; index += 2) {
        let currentCocktail = input[index];
        if (currentCocktail === 'Party!') {
            console.log(`We need ${(wishingForProfit - sum).toFixed(2)} leva more.`);
            console.log(`Club income - ${sum.toFixed(2)} leva.`);
            break;
        }
        let cocktailCount = Number(input[index + 1]);
        let pricePerCocktail = currentCocktail.length;
        let orderPrice = pricePerCocktail * cocktailCount;

        if (orderPrice % 2 !== 0) {
            orderPrice *= 0.75;
        }

        sum += orderPrice;
        if (sum >= wishingForProfit) {
            console.log("Target acquired.");
            console.log(`Club income - ${sum.toFixed(2)} leva.`);
            break;
        }
    }
}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"]) 