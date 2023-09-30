function sumDigits(number) {

    let inputAsString = number.toString();
    let sumOfDigits = 0;

    for(let index = 0; index < inputAsString.length; index++) {
     let currentDigit = Number(inputAsString[index]);

    sumOfDigits += currentDigit;
    }
    console.log(sumOfDigits);
    
}