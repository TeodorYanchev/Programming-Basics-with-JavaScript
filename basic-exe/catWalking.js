function catWalking(input) {

    let minutesWalkPerDay = Number(input[0]);
    let walkingCount = Number(input[1]);
    let catsCalories = Number(input[2]);

    let timeWalk = minutesWalkPerDay * walkingCount;
    let caloriesBurned = timeWalk * 5;
    let neededCalories = catsCalories / 2;


    if(caloriesBurned >= neededCalories){
console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }

}

catWalking(["15", 
"2", 
"500"])