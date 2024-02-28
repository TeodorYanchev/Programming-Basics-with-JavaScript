function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPer1Meter = Number(input[2]);

    let time = distanceInMeters * timeInSecondsPer1Meter;
    let delay = Math.floor(distanceInMeters / 50) * 30;
    let totalTime = time + delay;

    if (recordInSeconds > totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let secondsNeeded = totalTime - recordInSeconds;
        console.log(`No! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }

}

mountainRun(["5554.36",
    "1340",
    "3.23"])

