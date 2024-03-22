function easterLunch(input) {

    let easterBreadCount = Number(input[0]);
    let phylloPastryWithEggsCount = Number(input[1]);
    let kilosOfCookies = Number(input[2]);

    let easterBreadPrice = easterBreadCount * 3.20;
    let eggsPrice = phylloPastryWithEggsCount * 4.35;
    let cookiesPrice = kilosOfCookies * 5.40;

    let totalPrice = easterBreadPrice + eggsPrice + cookiesPrice + ((0.15 * 12) * phylloPastryWithEggsCount);
    console.log(totalPrice.toFixed(2));
}

easterLunch(["4", 
"4", 
"3"]) 