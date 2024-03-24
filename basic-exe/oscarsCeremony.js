function oscarsCeremony(input) {

    let rentForAHall = Number(input[0]);

    let statuettes = 0.7 * rentForAHall;
    let catering = 0.85 * statuettes;
    let soundReinforcement = 1 / 2 * catering;

    let totalSum = rentForAHall + statuettes + catering + soundReinforcement;
    console.log(totalSum.toFixed(2));

}

oscarsCeremony(["5555"]);
