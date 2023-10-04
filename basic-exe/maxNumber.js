function maxNumber(arr) {
    let result = '';
    let arrayLength = arr.length;

    for (let index = 1; index <= arrayLength; index++) {
        let isMax = true;

        let currentNumber = Number(arr[index - 1]);

        for (let j = index; j < arr.length; j++) {

            let nextNumber = Number(arr[j]);
            if (nextNumber >= currentNumber) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currentNumber} `
        }
    }



    console.log(result);
}

