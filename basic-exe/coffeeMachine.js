function coffeeMachine(input) {

    let drink = input[0];
    let sugar = input[1];
    let drinkCount = Number(input[2]);
    let sum = 0;

    switch (drink) {
        case 'Espresso':
            if (sugar === 'Without') {
                sum = drinkCount * 0.90;
            } else if (sugar === 'Normal') {
                sum = drinkCount * 1.00;
            } else if (sugar === 'Extra') {
                sum = drinkCount * 1.20;
            }
            break;
        case 'Cappuccino':
            if (sugar === 'Without') {
                sum = drinkCount * 1.00;
            } else if (sugar === 'Normal') {
                sum = drinkCount * 1.20;
            } else if (sugar === 'Extra') {
                sum = drinkCount * 1.60;
            }
            break;
        case 'Tea':
            if (sugar === 'Without') {
                sum = drinkCount * 0.50;
            } else if (sugar === 'Normal') {
                sum = drinkCount * 0.60;
            } else if (sugar === 'Extra') {
                sum = drinkCount * 0.70;
            }
            break;
    }

    if (sugar === "Without") {
        sum = sum - (0.35 * sum);
    }

    if (drink === 'Espresso' && drinkCount >= 5) {
        sum = sum - (0.25 * sum);
    }

    if (sum > 15) {
        sum = sum - (0.20 * sum);
    }

    console.log(`You bought ${drinkCount} cups of ${drink} for ${sum.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]) 