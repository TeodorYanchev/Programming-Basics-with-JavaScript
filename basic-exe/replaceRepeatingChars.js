function replaceRepeatingChars(text) {

    let output = text[0];
    let textLength = text.length;

    for (let index = 1; index < textLength; index++) {

        let currentElement = text[index];
        let prevElement = text[index - 1];
        if (currentElement !== prevElement) {
            output += currentElement;
        }
    }
    console.log(output);
}