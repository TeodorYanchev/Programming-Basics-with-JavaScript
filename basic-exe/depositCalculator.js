function depositCalculator(input) {
    
    depositedSum = Number(input[0])
    termOfDeposit = Number(input[1])
    annualInterestRate = Number(input[2])

    interest = depositedSum * (annualInterestRate / 100)
    interestPerMonth = interest / 12
    finalSum = depositedSum + termOfDeposit * interestPerMonth
    console.log(finalSum);

}


depositCalculator(["2350",
"6 ",
"7 "])
