function seriesCalculator(input) {

    let serialName = input[0];
    let seasonCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let timeEpisodeWithoutAdvertising = Number(input[3]);

    let minutesADD = 0.2 * timeEpisodeWithoutAdvertising;
    let episodeDuration = timeEpisodeWithoutAdvertising + minutesADD;
    let specialExtraTime = seasonCount * 10;

    let totalTime = episodeDuration * episodeCount  * seasonCount + specialExtraTime;

    console.log(`Total time needed to watch the ${serialName} series is ${Math.floor(totalTime)} minutes.`);

}

seriesCalculator(["Lucifer", '3', '18', '55']);