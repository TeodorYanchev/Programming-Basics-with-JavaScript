function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let holidayType = '';
    
    if(budget <= 100){
        destination = "Bulgaria";
    if(season === "summer"){
        budget *= 0.3;
    } else if(season === "winter"){
        budget *= 0.7;
    }


    } else if(budget <= 1000){
        destination = "Balkans";
    if(season === "summer"){
        budget *= 0.40;
    } else if(season === "winter"){
        budget *= 0.80;
    }

    } else if(budget > 1000){
        destination = "Europe"
        budget *= 0.90;
    }

    if(season === "summer"){
        holidayType = "Camp"
    } else if(season === "winter"){
        holidayType = "Hotel"
    } 
    
    if(destination === "Europe"){
        holidayType = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${budget.toFixed(2)}`);

    

}

journey(["1500", "summer"])