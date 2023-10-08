function loadingBar(number) {
    let percentCounter = number / 10;
    let dotsCounter = 10 - percentCounter;

    if (percentCounter === 10) {
        console.log("100% Complete!");
    } else {
        console.log(`${number}% [${'%'.repeat(percentCounter)}${'.'.repeat(dotsCounter)}]`);
        console.log(`Still loading...`);
    }
}