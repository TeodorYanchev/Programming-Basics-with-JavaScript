function travelAgency(input) {

    let cityName = input[0];
    let typePack = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);
    let sum = 0;

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }

    switch (cityName) {
        case 'Bansko':
        case 'Borovets':
            if (typePack === 'withEquipment') {
                sum = 100;
                if (vipDiscount === 'yes') {
                    sum = sum - (0.1 * sum);
                }
            } else if (typePack === 'noEquipment') {
                sum = 80;
                if (vipDiscount === 'yes') {
                    sum = sum - (0.05 * sum);
                }
            } else {
                console.log("Invalid input!");
                return;
            }
            break;
        case 'Varna':
        case 'Burgas':
            if (typePack === 'withBreakfast') {
                sum = 130;
                if (vipDiscount === 'yes') {
                    sum = sum - (0.12 * sum);
                }
            } else if (typePack === 'noBreakfast') {
                sum = 100;
                if (vipDiscount === 'yes') {
                    sum = sum - (0.07 * sum);
                }
            } else {
                console.log("Invalid input!");
                return;
            }
            break;
        default: 
            console.log("Invalid input!"); 
            return;
    }
    sum *= days;
    if (days > 7) {
        let discount = sum / days;
        sum -= discount;
    }

    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);

}

travelAgency(["Burgas", 
"noBreakfast", 
"no", 
"4"])