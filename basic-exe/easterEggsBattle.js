function easterEggsBattle(input) {

    let countPlayerOne = Number(input[0]);

    let countPlayerTwo = Number(input[1]);


    for (let index = 2; index <= input.length; index++) {
        let command = input[index];
        if (command === 'End') {
            console.log(`Player one has ${countPlayerOne} eggs left.`);
            console.log(`Player two has ${countPlayerTwo} eggs left.`);
            return;
        }
        if (command === 'one') {
            countPlayerTwo--;
            if (countPlayerTwo <= 0) {
                console.log(`Player two is out of eggs. Player one has ${countPlayerOne} eggs left.`);
                break;
            }

        } else if (command === 'two') {
            countPlayerOne--;
            if (countPlayerOne <= 0) {
                console.log(`Player one is out of eggs. Player two has ${countPlayerTwo} eggs left.`);
                break;
            }
        }
    }
}
easterEggsBattle([
    '2',
    '6',
    'one',
    'two',
    'two',
    '',
    ''
]);