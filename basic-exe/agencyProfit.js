function agencyProfit(input) {

    let airlineName = input[0];
    let countTicketAdult = Number(input[1]);
    let countKidsTicket = Number(input[2]);
    let netTicketPriceForAdult = Number(input[3]);
    let serviceFeePrice = Number(input[4]);

    let kidsTax = 0.3 * netTicketPriceForAdult;
    let kidsTaxAfterService = kidsTax + serviceFeePrice;
    let adultTaxAfterService = netTicketPriceForAdult + serviceFeePrice;
    let totalPrice = (countKidsTicket * kidsTaxAfterService) + (countTicketAdult * adultTaxAfterService);
    let profit = 0.2 * totalPrice;

    console.log(`The profit of your agency from ${airlineName} tickets is ${profit.toFixed(2)} lv.`);

}

agencyProfit(["Ryanair", 
"60", 
"23", 
"158.96", 
"39.12"])