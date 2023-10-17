function arrayModifier(arr) {
    let arrayOfNumbers = arr.shift().split(" ").map(Number);
    let arrLength = arr.length;

    for (let index = 0; index < arrLength; index++) {
        let currentCommand = arr[index].split(" ");
        let command = currentCommand.shift();
        let indexOne = Number(currentCommand.shift());
        let indexTwo = Number(currentCommand.shift());
        //    let [command, indexOne, indexTwo] = arr.[index].split(" ");
        switch (command) {
            case "swap":
                let temp = arrayOfNumbers[indexOne];
                arrayOfNumbers[indexOne] = arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexTwo] = temp;
                break;

            case "multiply":
                let result = arrayOfNumbers[indexOne] * arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexOne] = result;
                break;

            case "decrease":
                arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
                break;

            case "end":
                break;
        }

    }
    console.log(arrayOfNumbers.join(", "));
}