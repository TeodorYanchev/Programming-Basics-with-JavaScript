function movieDay(input) {

    let filmingTime = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let timeForScenes = Number(input[2]);

    let preparationOfTheTerrain = 0.15 * filmingTime;
    let totalTimeScene = numberOfScenes * timeForScenes;

    let finalTime = totalTimeScene + preparationOfTheTerrain;

    if (filmingTime >= finalTime) {
        let timeLeft = filmingTime - finalTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
    } else {
        let timeNeeded = finalTime - filmingTime;
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }
}
movieDay(["60", 
"15", 
"3"]) 