function cinema(input) {
    let hallCapacity = Number(input[0]); 
    let seatsLeft = hallCapacity; 
    let totalIncome = 0; 

    for (let index = 1; index < input.length; index++) {
        let visitors = Number(input[index]); 

        if (visitors > seatsLeft) {
            console.log("The cinema is full."); 
            console.log(`Cinema income - ${totalIncome} lv.`);
            return;
        }

        let currentIncome = visitors * 5; 

       
        if (visitors % 3 === 0) {
            currentIncome -= 5;
        }

        totalIncome += currentIncome; 
        seatsLeft -= visitors; 

        if (input[index + 1] === "Movie time!") {
            console.log(`There are ${seatsLeft} seats left in the cinema.`);
            console.log(`Cinema income - ${totalIncome} lv.`);
            return;
        }
    }
}

cinema(['100',
    '15',
    '15',
    '15',
    '15',
    '15',
    '15',
    '15'])