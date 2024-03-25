function energyBooster(input) {

    let fruit = input[0];
    let size = input[1];
    let sizeCount = Number(input[2]);
    let sum = 0;

    switch (fruit) {
        case 'Watermelon':
            if (size === 'small') {
                sum = sizeCount * (56 * 2);
            } else if (size === 'big') {
                sum = sizeCount * (28.70 * 5);
            }
            break;
        case 'Mango':
            if (size === 'small') {
                sum = sizeCount * (36.66 * 2);
            } else if (size === 'big') {
                sum = sizeCount * (19.60 * 5);
            }
            break;
        case 'Pineapple':
            if (size === 'small') {
                sum = sizeCount * (42.10 * 2);
            } else if (size === 'big') {
                sum = sizeCount * (24.80 * 5);
            }
            break;
        case 'Raspberry':
            if (size === 'small') {
                sum = sizeCount * (20 * 2);
            } else if (size === 'big') {
                sum = sizeCount * (15.20 * 5);
            }
            break;
    }

    if (sum >= 400 && sum <= 1000) {
        sum *= 0.85;
    } else if (sum > 1000) {
        sum *= 0.5;
    }

    console.log(`${sum.toFixed(2)} lv.`);

}

energyBooster(["Mango", 
"big", 
"8"])