function bonusScore(input) {
    let initialPoints = Number(input[0]);
    let bonusPoints = 0;

    if (initialPoints <= 100) {
        bonusPoints = 5
    } else if (initialPoints <= 1000) {
        bonusPoints = 0.2 * initialPoints      
    } else {
        bonusPoints = 0.1 * initialPoints
    }    
    

    if (initialPoints % 2 === 0) {
        bonusPoints = bonusPoints + 1
    } else if (initialPoints % 10 === 5) {
        bonusPoints = bonusPoints + 2
    }

    console.log(bonusPoints)
    console.log(initialPoints + bonusPoints)
}
bonusScore(["2703"])