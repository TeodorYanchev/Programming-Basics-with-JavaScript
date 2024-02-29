function agencyProfit(input) {

    let airlineName = input[0];
    let ticketAdultCount = Number(input[1]);
    let ticketKidCount = Number(input[2]);
    let netPriceForAdult = Number(input[3]);
    let serviceFeePrice = Number(input[4]);

    let netPriceForKid = netPriceForAdult - (0.70 * netPriceForAdult);
    let priceAfterServiceAdult = netPriceForAdult + serviceFeePrice;
    let priceAfterServiceKid = netPriceForKid + serviceFeePrice;

    let totalSum = (ticketKidCount * priceAfterServiceKid) + (ticketAdultCount * priceAfterServiceAdult);

    let totalProfit = 0.20 * totalSum;

    console.log(`The profit of your agency from ${airlineName} tickets is ${totalProfit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])


