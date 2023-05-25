function fishTank(input) {
   
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percentF = Number(input[3]) / 100;

    let aquariumVolume = (lengthInCm * widthInCm * heightInCm) / 1000;
    let volumeTaken = percentF * aquariumVolume;

    let freeVolume = aquariumVolume - volumeTaken
    console.log(freeVolume);
    
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)