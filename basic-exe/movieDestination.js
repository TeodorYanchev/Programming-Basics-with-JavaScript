function movieDestination(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);
    let sum = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                sum = daysCount * 45000
            } else if (season === 'Summer') {
                sum = daysCount * 40000;
            }
            break;
        case 'Sofia':
            if (season === 'Winter') {
                sum = daysCount * 17000;
            } else if (season === 'Summer') {
                sum = daysCount * 12500;
            }
            break;
        case 'London':
            if (season === 'Winter') {
                sum = daysCount * 24000;
            } else if (season === 'Summer') {
                sum = daysCount * 20250;
            }
            break;
    }

    if (destination === 'Dubai') {
        sum *= 0.7;
    } else if (destination === 'Sofia') {
        sum *= 1.25;
    }

    if(budget >= sum){
    let moneyLeft = budget - sum;
    console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);

    } else{
        let moneyNeeded = sum - budget;
     console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"]) 