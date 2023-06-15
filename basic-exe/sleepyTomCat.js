function sleepyTomCat(input) {
    let restDays = Number(input[0]);

    let workDays = 365 - restDays;
    let gameTime = (workDays * 63) + (restDays * 127); 
    let time = Math.abs(30000 - gameTime);
    if(gameTime > 30000){
        let hours = Math.floor(time / 60);
        let minutes = time % 60;
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);

    } else {
        let hours = Math.floor(time / 60)
        let minutes = time % 60;
        console.log("Tom sleeps well");
    console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
    
}

sleepyTomCat(["20"])