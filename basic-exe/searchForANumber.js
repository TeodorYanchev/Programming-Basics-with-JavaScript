function searchForANumber(numbersArray, commandsArray) {

    let numbersToTake = commandsArray[0];
    let numbersToDelete = commandsArray[1];
    let surchedNumber = commandsArray[2];

    let newArray = numbersArray.slice(0, numbersToTake);
    newArray.splice(0, numbersToDelete);

    let numberCounter = newArray.filter(e => e === surchedNumber).length;

    console.log(`Number ${surchedNumber} occurs ${numberCounter} times.`);

}