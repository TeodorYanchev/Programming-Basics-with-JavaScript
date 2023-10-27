function wordTracker(input) {
    let map = new Map();

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        map.set(word, 0)
    });

    for (const line of input) {
        for (const word of wordsToCheck) {

            if (line === word) {
                let currentQuantity = map.get(line);
                map.set(line, currentQuantity + 1)
            }
        }
    }

    let sortedWords = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])

    sortedWords.forEach(element => {
        console.log(`${element.join(' - ')}`);
    })
}