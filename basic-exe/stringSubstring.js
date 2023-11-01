function stringSubstring(word, text) {

    let textArray = text.split(' ');

    let isNotFound = true;

    for (const element of textArray) {

        if (word.toLowerCase() === element.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }

    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}