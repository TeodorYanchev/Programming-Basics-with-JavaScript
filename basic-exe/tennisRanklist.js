function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let startingPoint = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < input.length; i++) {
        let curResult = input[i];

        if (curResult === 'W') {
            pointsWon += 2000;
            tournamentsWon++;
        } else if (curResult === 'F') {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    let totalPoints = startingPoint + pointsWon;
    console.log(`Final points: ${totalPoints}`);

    let avgPoint = Math.floor(pointsWon / tournamentCount);
    console.log(`Average points: ${avgPoint}`);

    let tournamentsWonPercent = (tournamentsWon / tournamentCount) * 100;
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);

}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
