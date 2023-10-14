function distinctArray(numbers) {
    let uniqueElementsArray = [];

    for (const number of numbers) {
        if (!uniqueElementsArray.includes(number)) {
            uniqueElementsArray.push(number);
        }
    }
    console.log(uniqueElementsArray.join(' '));
}