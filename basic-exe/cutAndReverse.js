function cutAndReverse(input) {

    let firstHalf = input
        .split('')
        .slice(0, input.length / 2)
        .reverse()
        .join('')

    let secondHalf = input
        .split('')
        .slice(input.length / 2)
        .reverse()
        .join('')

    console.log(firstHalf);
    console.log(secondHalf);
}