function balls(input) {
    let ballsCount = Number(input[0]);
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColourBalls = 0;
    let blackBallsDiv = 0;

    for (let i = 1; i <= ballsCount; i++) {
        let colourType = input[i];

        switch (colourType) {
            case "red": points += 5;
                redBalls++;
                break;
            case "orange": points += 10;
                orangeBalls++;
                break;
            case "yellow": points += 15;
                yellowBalls++;
                break;
            case "white": points += 20;
                whiteBalls++;
                break;
            case "black": points = Math.floor(points / 2);
                blackBallsDiv++;
                break;
            default: points = points;
                otherColourBalls++;
                break;
        }

    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColourBalls}`);
    console.log(`Divides from black balls: ${blackBallsDiv}`);
}

balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"]);
