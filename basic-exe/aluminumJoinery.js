function aluminumJoinery(input) {

    let windowSashCount = Number(input[0]);
    let sashWindowType = input[1];
    let deliveryOrNot = input[2];
    let price = 0;

    if (windowSashCount < 10) {
        console.log("Invalid order");
        return;
    }

    switch (sashWindowType) {

        case '90X130':
            price = 110 * windowSashCount;
            if (windowSashCount > 60) {
                price *= 0.92;
            } else if (windowSashCount > 30) {
                price *= 0.95;
            }
            break;

        case '100X150':
            price = 140 * windowSashCount;
            if (windowSashCount > 80) {
                price *= 0.90;
            } else if (windowSashCount > 40) {
                price *= 0.94;
            }
            break;
        case '130X180':
            price = 190 * windowSashCount;
            if (windowSashCount > 50) {
                price *= 0.88;
            } else if (windowSashCount > 20) {
                price *= 0.93;
            }
            break;
        case '200X300':
            price = 250 * windowSashCount;
            if (windowSashCount > 50) {
                price *= 0.86;
            } else if (windowSashCount > 25) {
                price *= 0.91;
            }
            break;
    }

    switch (deliveryOrNot) {
        case "With delivery": price += 60; break;
        case "Without delivery": price = price; break;
    }


    if (windowSashCount > 99) {
        price *= 0.96;
    }

    console.log(`${price.toFixed(2)} BGN`);

}

aluminumJoinery(["105", 
"100X150", 
"With delivery"])