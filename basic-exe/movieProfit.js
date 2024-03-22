function movieProfit(input) {

    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentage = Number(input[4]);

    let profit = daysCount * ticketCount * ticketPrice;
    let finalProfit = profit - (profit * percentage / 100);

    console.log(`The profit from the movie ${movieName} is ${finalProfit.toFixed(2)} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"])