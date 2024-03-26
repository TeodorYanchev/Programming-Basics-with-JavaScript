function fitnessCard(input) {

    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];
    let sum = 0;

    switch (sportType) {
        case 'Gym':
            if (gender === 'm') {
                sum = 42;
            } else if (gender = 'f') {
                sum = 35;
            }
            break;
        case 'Boxing':
            if (gender === 'm') {
                sum = 41;
            } else if (gender = 'f') {
                sum = 37;
            }
            break;
        case 'Yoga':
            if (gender === 'm') {
                sum = 45;
            } else if (gender = 'f') {
                sum = 42;
            }
            break;
        case 'Zumba':
            if (gender === 'm') {
                sum = 34;
            } else if (gender = 'f') {
                sum = 31;
            }
            break;
        case 'Dances':
            if (gender === 'm') {
                sum = 51;
            } else if (gender = 'f') {
                sum = 53;
            }
            break;
        case 'Pilates':
            if (gender === 'm') {
                sum = 39;
            } else if (gender = 'f') {
                sum = 37;
            }
            break;
    }
    if (age <= 19) {
        sum *= 0.8;
    }

    if (budget >= sum) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        let moneyNeeded = sum - budget;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}

fitnessCard(["10", 
"m", 
"50", 
"Pilates"])