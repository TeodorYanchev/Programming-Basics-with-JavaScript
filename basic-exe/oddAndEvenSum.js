function oddAndEvenSum(number) {

    let numAsString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numberAsStringLength = numAsString.length;

    for (let index = 0; index < numberAsStringLength; index++) {

        let currentNumber = Number(numAsString[index]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}