function sorting(input) {
    let sortedArray = input.sort((a, b) => b - a);
    let result = [];
    let sortedLength = sortedArray.length;

    for (let index = 0; index < sortedLength; index++) {
        let currentNumber = sortedArray.shift();
        let lastNumber = sortedArray.pop();
        result.push(currentNumber);
        result.push(lastNumber);

    }
    console.log(result.join(' '));
}