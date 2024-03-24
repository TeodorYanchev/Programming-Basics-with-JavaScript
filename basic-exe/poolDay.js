function poolDay(input) {

    let peopleCount = Number(input[0]);
    let entranceFee = Number(input[1]);
    let priceOfASunLoungerPerOne = Number(input[2]);
    let umbrellaPricePerOne = Number(input[3]);

    let taxEntrance = peopleCount * entranceFee;
    let umbrellaTax = Math.ceil(0.5 * peopleCount) * umbrellaPricePerOne;
    let loungerTax = Math.ceil(0.75 * peopleCount) * priceOfASunLoungerPerOne;

    let totalTax = taxEntrance + umbrellaTax + loungerTax;
    console.log(`${totalTax.toFixed(2)} lv.`);

}

poolDay(["21",
    "5.50",
    "4.40",
    "6.20"])