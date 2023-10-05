function mergeArrays(firstArray, secondArray) {
    let resultArray = [];
    let arrayLength = firstArray.length;

    for (let index = 0; index < arrayLength; index++) {

        if (index % 2 === 0) {
            resultArray[index] = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            resultArray[index] = firstArray[index] + secondArray[index];
        }
    }
    console.log(resultArray.join(' - '));
}