function balls(input) {

    let ballsCount = Number(input[0]);
    let colour = input[1];
    let points = 0;
    let redPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let otherBallPoints = 0;
    let dividesBlackBalls = 0;

    for (let index = 1; index < ballsCount + 1; index++) {
        let currentColour = input[index];

        if (currentColour === 'red') {
            points += 5;
            redPoints++;
        } else if (currentColour === 'orange') {
            points += 10;
            orangePoints++;
        } else if (currentColour === 'yellow') {
            points += 15;
            yellowPoints++;
        } else if (currentColour === 'white') {
            points += 20;
            whitePoints++;
        } else if (currentColour === 'black') {
            points = Math.floor(points / 2);
            dividesBlackBalls++;
        } else {
            otherBallPoints++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redPoints}`);
    console.log(`Orange balls: ${orangePoints}`);
    console.log(`Yellow balls: ${yellowPoints}`);
    console.log(`White balls: ${whitePoints}`);
    console.log(`Other colors picked: ${otherBallPoints}`);
    console.log(`Divides from black balls: ${dividesBlackBalls}`);
}
balls(["3",
    "white",
    "black",
    "pink"])