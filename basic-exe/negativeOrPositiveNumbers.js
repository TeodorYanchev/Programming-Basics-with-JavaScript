function negativeOrPositiveNumbers(arr) {
    let myArray = [];

    for (let el of arr) {
        el = Number(el);
        if(el <0) {
            myArray.unshift(el);
        } else {
            myArray.push(el)
        }
    }
    console.log(myArray.join("\n"));
}