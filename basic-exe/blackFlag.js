function blackFlag(data) {
    let days = Number(data[0]);
    let dailyPlunder = Number(data[1]);
    let target = Number(data[2]);
    let current = 0;

    for (let i = 1; i <= days; i++) {
        current += dailyPlunder;
        if (i % 3 === 0) {
            current += dailyPlunder * 0.50;
        }
        if (i % 5 === 0) {
            current *= 0.70;
        }
    }

    if (current >= target) {
        console.log(`Ahoy! ${current.toFixed(2)} plunder gained.`);
    } else {
        let percentage = current / target * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}