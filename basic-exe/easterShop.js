function easterShop(input) {
    let totalAvailable = Number(input[0]);
    let eggsSold = 0; // Променлива, която ще следи броя на продадените яйца

    for (let i = 1; i < input.length; i += 2) {
        let command = input[i];
        let countUp = Number(input[i + 1]);

        if (command === 'Close') {
            console.log("Store is closed!");
            console.log(`${eggsSold} eggs sold.`);
            return;
        }

        if (command === 'Buy') {
            if (countUp > totalAvailable) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${totalAvailable}.`);
                return;
            }
            totalAvailable -= countUp;
            eggsSold += countUp; 
        } else if (command === 'Fill') {
            totalAvailable += countUp;
        }
    }
}

easterShop(['20',
    'Fill',
    '30',
    'Buy',
    '15',
    'Buy',
    '20',
    'Close'])