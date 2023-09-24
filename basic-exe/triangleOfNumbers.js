function triangleOfNumbers(number) {
    let result = '';

    for (let rows = 1; rows <= number; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            result += `${rows} `;
        }
        console.log(result);
        result = '';
    }

}