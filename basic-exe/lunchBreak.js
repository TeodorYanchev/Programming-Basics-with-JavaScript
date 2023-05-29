function lunchBreak(input) {
    let seriesName = input[0];
    let episode = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunch = 1 / 8 * breakTime;
    let relaxTime = 1 / 4 * breakTime;
    let totalTime = (breakTime - lunch - relaxTime)

    if (totalTime >= episode) {
        let timeLeft = Math.ceil(totalTime - episode)

        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episode - totalTime)
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"])

