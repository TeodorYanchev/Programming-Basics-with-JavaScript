function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let initialTime = distance * timePerMeter;
    let delayCount = Math.floor(distance / 15);
    let totalDelayTime = delayCount * 12.5;

    let totalTime = initialTime + totalDelayTime

    if (totalTime >= currentRecord) {
       let secondMore = totalTime - currentRecord;
        console.log(`No, he failed! He was ${secondMore.toFixed(2)} seconds slower.`)
    } else {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    }
}
worldSwimmingRecord(["10464",
    "1500",
    "20"])
