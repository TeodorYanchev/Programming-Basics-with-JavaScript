function oddOccurrences(input) {
    let inputArray = input.split(' ').map(e => e.toLowerCase());

    let wordsObject = {};

    for (const word of inputArray) {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0;
        }
        wordsObject[word]++;
    }

    let arrOfOddElements = Object.entries(wordsObject).filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1])

    let result = '';
    for (const array of arrOfOddElements) {
        result += `${array[0]} `;

    }
    console.log(result);
}