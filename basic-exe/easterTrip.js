function easterTrip(input) {

    let destination = input[0];
    let hoolidayDate = input[1];
    let overnightCount = Number(input[2]);
    let sum = 0;

    switch (destination) {
        case 'France':
            if (hoolidayDate === '21-23') {
                sum = overnightCount * 30;
            } else if (hoolidayDate === '24-27') {
                sum = overnightCount * 35;
            } else if (hoolidayDate === '28-31') {
                sum = overnightCount * 40;
            }
            break;
        case 'Italy':
            if (hoolidayDate === '21-23') {
                sum = overnightCount * 28;
            } else if (hoolidayDate === '24-27') {
                sum = overnightCount * 32;
            } else if (hoolidayDate === '28-31') {
                sum = overnightCount * 39;
            }
            break;
        case 'Germany':
            if (hoolidayDate === '21-23') {
                sum = overnightCount * 32;
            } else if (hoolidayDate === '24-27') {
                sum = overnightCount * 37;
            } else if (hoolidayDate === '28-31') {
                sum = overnightCount * 43;
            }
            break;

    }
    console.log(`Easter trip to ${destination} : ${sum.toFixed(2)} leva.`);
}

easterTrip(["Italy", 
"21-23", 
"7"]) 