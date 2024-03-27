function mountainRun(input) {

    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecPerOneMeter = Number(input[2]);

    let timeWithoutDelay = distanceInMeters * timeInSecPerOneMeter;
    let timeDelay = Math.floor(distanceInMeters / 50);
    let timeDelayWithSec = timeDelay * 30;
    let finalTime = timeWithoutDelay + timeDelayWithSec;

    if (recordInSec > finalTime) {
        console.log(` Yes! The new record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        let secondNeeded = finalTime - recordInSec;
        console.log(`No! He was ${secondNeeded.toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377", 
"389", 
"3"]) 