function factorialDivision(firstNum, secondNum) {
    
    function factorial(num) {
        
        if(num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
    let firstNumberFactorial = factorial(firstNum);
    let secondNumberFactorial = factorial(secondNum);
    let result = firstNumberFactorial / secondNumberFactorial;
    console.log(result.toFixed(2));

}