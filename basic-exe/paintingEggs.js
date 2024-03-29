function paintingEggs(input) {

    let eggsSize = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let sum = 0;

    switch (eggsSize) {
        case 'Large':
            if (color === 'Red') {
                sum = count * 16;
            } else if (color === 'Green') {
                sum = count * 12;
            } else if (color === 'Yellow') {
                sum = count * 9;
            }
            break;
        case 'Medium':
            if (color === 'Red') {
                sum = count * 13;
            } else if (color === 'Green') {
                sum = count * 9;
            } else if (color === 'Yellow') {
                sum = count * 7;
            }
            break;
        case 'Small':
            if (color === 'Red') {
                sum = count * 9;
            } else if (color === 'Green') {
                sum = count * 8;
            } else if (color === 'Yellow') {
                sum = count * 5;
            }
            break;
    }

    sum = sum - (0.35 * sum);
    console.log(`${sum.toFixed(2)} leva.`);
}

paintingEggs(["Small", 
"Yellow", 
"3"]) 