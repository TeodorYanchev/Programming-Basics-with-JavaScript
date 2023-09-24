function vacation(people, groupType, day) {

    let totalSum = 0;

    switch (groupType) {
        case 'Students':

            if (day === 'Friday') {
                totalSum = people * 8.45;
            } else if (day === 'Saturday') {
                totalSum = people * 9.80;
            } else if (day === 'Sunday') {
                totalSum = people * 10.46;
            }

            if (people >= 30) {
                totalSum *= 0.85;
            }
            break;
        case 'Business':

            if (people >= 100) {
                people = people - 10;
            }

            if (day === 'Friday') {
                totalSum = people * 10.90;

            } else if (day === 'Saturday') {
                totalSum = people * 15.60;
            } else if (day === 'Sunday') {
                totalSum = people * 16;
            }
            break;

        case 'Regular':

            if (day === 'Friday') {
                totalSum = people * 15;
            } else if (day === 'Saturday') {
                totalSum = people * 20;
            } else if (day === 'Sunday') {
                totalSum = people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                totalSum *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}