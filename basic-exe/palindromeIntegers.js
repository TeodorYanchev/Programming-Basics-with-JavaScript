function palindromeIntegers(array) {

    for (let index = 0; index < array.length; index++) {
        let numberAsString = array[index].toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }


    }
}