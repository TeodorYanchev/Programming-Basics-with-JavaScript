function filmPremiere(input) {

    let project = input[0];
    let snack = input[1];
    let ticketCount = Number(input[2]);
    let sum = 0;

    switch (project) {
        case "John Wick":
            if (snack === 'Drink') {
                sum = ticketCount * 12;
            } else if (snack === 'Popcorn') {
                sum = ticketCount * 15;
            } else if (snack === 'Menu') {
                sum = ticketCount * 19;
            }
            break;
        case "Star Wars":
            if (snack === 'Drink') {
                sum = ticketCount * 18;
            } else if (snack === 'Popcorn') {
                sum = ticketCount * 25;
            } else if (snack === 'Menu') {
                sum = ticketCount * 30;
            }
            break;
        case "Jumanji":
            if (snack === 'Drink') {
                sum = ticketCount * 9;
            } else if (snack === 'Popcorn') {
                sum = ticketCount * 11;
            } else if (snack === 'Menu') {
                sum = ticketCount * 14;
            }
            break;

    }

    if (project === 'Star Wars' && ticketCount > 4) {
        sum *= 0.7;
    } else if (project === 'Jumanji' && ticketCount == 2) {
        sum *= 0.85;
    }

    console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}

filmPremiere(["John Wick",
    "Drink",
    "6"])