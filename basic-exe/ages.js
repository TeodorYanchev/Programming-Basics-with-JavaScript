function ages(input) {
    let ages = Number(input);
    let result = '';
    if (ages < 0) {
        result = 'out of bounds';
    } else if (ages >= 0 && ages <= 2) {
        result = 'baby';
    } else if (ages <= 13) {
        result = 'child';
    } else if (ages <= 19) {
        result = 'teenager';
    } else if (ages <= 65) {
        result = 'adult';
    } else if (ages > 65) {
        result = 'elder';
    }
    console.log(result);
}