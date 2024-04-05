function movieStars(input) {
    let budgetACTORS = Number(input.shift());
    let currentBudgetLeft = budgetACTORS;

    for (let i = 0; i < input.length; i += 2) {
        let actorName = input[i];
        if (actorName === 'ACTION') {
            break;
        }

        let hisSalary = Number(input[i + 1]);

        if (actorName.length > 15) {
            hisSalary = 0.2 * budgetACTORS;
        }

        if (currentBudgetLeft >= hisSalary) {
            currentBudgetLeft -= hisSalary;
        } else {
            let moneyNeeded = hisSalary - currentBudgetLeft;
            console.log(`We need ${moneyNeeded.toFixed(2)} leva for our actors.`);
            return;
        }
    }

    console.log(`We are left with ${currentBudgetLeft.toFixed(2)} leva.`);
}

movieStars(["170000", 
"Ben Affleck", 
"40000.50", 
"Zahari Baharov", 
"80000", 
"Tom Hanks", 
"2000.99", 
"ACTION"]) 