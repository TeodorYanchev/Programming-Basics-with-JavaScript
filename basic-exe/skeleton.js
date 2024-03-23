function skeleton(input) {

    let mins = Number(input[0]);
    let seconds = Number(input[1]);
    let length = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let time = mins * 60 + seconds;
    let decreaseTime = (length / 120);
    let totalDecreaseTime = decreaseTime * 2.5;

    let totalTime = (length / 100);
    let totalTime2 = totalTime * decreaseTime;
    let totalTime3 = totalTime2 - totalDecreaseTime;

    if(totalTime <= time) {

     console.log(`Marin Bangiev won an Olympic quota!`);
     console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else {
        let timeNeeded = time -totalTime;
        console.log(`No, Marin failed! He was ${Math.abs(timeNeeded.toFixed(3))} second slower.`);
    }
}

skeleton(["1", 
"20", 
"1546", 
"12"]) 