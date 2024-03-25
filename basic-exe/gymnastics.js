function gymnastics(input) {

    let country = input[0];
    let gymnasticsApp = input[1];
    let sum = 0;

    switch (country) {
        case 'Russia':
            if (gymnasticsApp === 'ribbon') {
                sum = 9.100 + 9.400;
            } else if (gymnasticsApp === 'hoop') {
                sum = 9.300 + 9.800;
            } else if (gymnasticsApp === 'rope') {
                sum = 9.600 + 9.000;
            }
            break;
        case 'Bulgaria':
            if (gymnasticsApp === 'ribbon') {
                sum = 9.600 + 9.400;
            } else if (gymnasticsApp === 'hoop') {
                sum = 9.550 + 9.750;
            } else if (gymnasticsApp === 'rope') {
                sum = 9.500 + 9.400;
            }
            break;
        case 'Italy':
            if (gymnasticsApp === 'ribbon') {
                sum = 9.200 + 9.500;
            } else if (gymnasticsApp === 'hoop') {
                sum = 9.450 + 9.350;
            } else if (gymnasticsApp === 'rope') {
                sum = 9.700 + 9.150;
            }
            break;

    }
    let points = 20 - sum;
    let percentage = (points / 20) * 100;

    console.log(`The team of ${country} get ${sum.toFixed(3)} on ${gymnasticsApp}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Italy", 
"hoop"]) 