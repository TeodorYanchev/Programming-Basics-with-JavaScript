function pascalCaseSplitter(input) {

    let words = [];
    let index = 0;

    for (let i = 1; i < input.length; i++) {

        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            words.push(input.substring(index, i));
            index = i;
        }
    }

    words.push(input.substring(index, input.length));
    console.log(words.join(', '));
}