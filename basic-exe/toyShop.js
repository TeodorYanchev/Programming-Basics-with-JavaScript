function toyShop(input) {

    let vacationPrice = Number(input[0])
    let puzzlesCount = Number(input[1])
    let dollsCount = Number(input[2])
    let bearsCount = Number(input[3])
    let minionsCount = Number(input[4])
    let trucksCount = Number(input[5])

    let moneyEarned = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let discount = 0;

    if (toysCount >= 50) {
        discount = 0.25 * moneyEarned
    }

    let finalPrice = moneyEarned - discount;
    let rent = 0.1 * finalPrice;
    let profit = finalPrice - rent;

    if (profit >= vacationPrice) {
        let moneyLeft = profit - vacationPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - profit
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

