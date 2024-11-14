function addAndSubtract(input) {
    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrayLength = input.length;

    for (let index = 0; index < arrayLength; index++) {
        let currentNumber = Number(input[index]);
        sumOldArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += index;
        } else {
            currentNumber -= index;
        }
        input[index] = currentNumber;
        sumNewArray += currentNumber;
    }
    console.log(input);
    console.log(sumOldArray);
    console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35])