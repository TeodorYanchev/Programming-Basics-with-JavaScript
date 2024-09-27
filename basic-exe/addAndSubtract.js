function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    function sum(firstNumber, secondNumber) {
           return firstNumber + secondNumber;

    }

    let sumResult = sum(firstNumber, secondNumber);

    function subtract(sumResult, thirdNumber) {
        return sumResult - thirdNumber;
    }
    return subtract(sumResult, thirdNumber);
}