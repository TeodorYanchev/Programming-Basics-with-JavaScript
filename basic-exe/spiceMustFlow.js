function spiceMustFlow(yield) {
    let days = 0;
    let consumeFromCrewPerDay = 26;
    let totalYield = 0;

    while(yield >= 100) {
        days++;
        totalYield += yield - consumeFromCrewPerDay;
        yield -= 10;
    }

    if(totalYield >= consumeFromCrewPerDay) {
        totalYield -= consumeFromCrewPerDay;
    }

    console.log(days);
    console.log(totalYield);
}