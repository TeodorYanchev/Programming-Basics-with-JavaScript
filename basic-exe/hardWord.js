function hardWord(input) {
    let text = input[0];
    let words = input[1].slice(0);

    words = words.sort((w1, w2) => w2.length - w1.length);

    for (const word of words) {
        let template = '_'.repeat(word.length);

        while (text.includes(template)) {
            text = text.replace(template, word)
        }
    }

    console.log(text);
}