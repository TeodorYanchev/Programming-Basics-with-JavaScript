function processOddNumbers(data) {
    let oddNumbersArray = data.filter((el, i) => i % 2 !== 0);

    let doubledArray = oddNumbersArray.map(x => x * 2);

    console.log(doubledArray.reverse().join(" "));
}