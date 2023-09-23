function printAndSum(start, end) {
    let numbersRow = '';
    let sum = 0;
    for (let number = start; number <= end; number++) {
        sum += number;
        numbersRow += `${number} `
    }
    console.log(numbersRow);
    console.log(`Sum: ${sum}`);
}