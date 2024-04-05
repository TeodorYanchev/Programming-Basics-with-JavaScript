function renovation(input) {

    let visochinaNaStenata = Number(input[0]);
    let shirinaNaStenata = Number(input[1]);
    let vratiteProzorcite = Number(input[2]);
    
    let allApart = (visochinaNaStenata * shirinaNaStenata * 4);
    let bezVratiIProzortsi = (vratiteProzorcite / 100) * allApart;
    let paintApart = Math.ceil(allApart - bezVratiIProzortsi);
    let currentLitters = paintApart;
    
    for (let index = 3; index < input.length; index++) {
    let command = Number(input[index]);
    currentLitters -= command;
    

    if(input[index + 1] === 'Tired!'){
console.log(`${currentLitters} quadratic m left.`);
    }


    }
    if(paintApart >= currentLitters){
        console.log(`All walls are painted and you have ${Math.abs(currentLitters)} l paint left!`);
        } else if(currentLitters >= paintApart){
        console.log(`All walls are painted! Great job, Pesho!`);
        }

}


renovation(["2", 
"3", 
"25", 
"6", 
"7", 
"8"]) 