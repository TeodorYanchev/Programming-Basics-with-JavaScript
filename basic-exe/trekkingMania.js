function trekkingMania(input) {
    let groupSize = Number(input[0]);

    let musala = 0;
    let montBlanc = 0;
    let Kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let counter = Number(input[i]);

        if (counter <= 5) {
            musala += counter;
        } else if (counter <= 12) {
            montBlanc += counter;
        } else if (counter <= 25) {
            Kilimanjaro += counter;
        } else if (counter <= 40) {
            k2 += counter;
        } else if (counter >= 41) {
            everest += counter;
        }
    }

    let totalClimbers = musala + montBlanc + Kilimanjaro + k2 + everest;

    let musalaPercent = musala / totalClimbers * 100;
    let montBlancPercent = montBlanc / totalClimbers * 100;
    let KilimanjaroPercent = Kilimanjaro / totalClimbers * 100;
    let k2Percent = k2 / totalClimbers * 100;
    let everestPercent = everest / totalClimbers * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montBlancPercent.toFixed(2)}%`)
    console.log(`${KilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania((["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
)