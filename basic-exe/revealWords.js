function revealWords(words, text) {
    let wordsArray = words.split(', ');

    for (const word of wordsArray) {

        let wordsFromStars = '*'.repeat(word.length);
        text = text.replace(wordsFromStars, word);


    }
    console.log(text);
}