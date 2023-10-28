function censoredWords(text, word) {
    let result;

    while (text.includes(word)) {
        let startIndex = text.indexOf(word);
        let endIndex = startIndex + word.length;
        result = text.substring(0, startIndex);
        result += "*".repeat(word.length);
        result += text.substring(endIndex);
        text = result;
    }
    console.log(result);
}