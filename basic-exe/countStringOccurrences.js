function countStringOccurrences(text, word) {
    let startIndex = 0;
    let count = 0;

    while (text.indexOf(word, startIndex) > -1) {
        count++;
        startIndex = text.indexOf(word, startIndex + 1)
    }
}