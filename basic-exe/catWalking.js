function catWalking(input) {
let minutesOfWalkPerDay = Number(input[0]);
let numberOfWalk = Number(input[1]);
let caloricIntake = Number(input[2]);

let minutesOfWalkingPerDay = minutesOfWalkPerDay * numberOfWalk;
let totalBurned = minutesOfWalkingPerDay * 5;

if(totalBurned >= caloricIntake /2){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurned}.`);
} else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurned}.`);
}
}

catWalking(["15",
"2",
"500"])