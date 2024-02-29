function bestPlayer(input) {
    let bestPlayerName = '';
    let maxGoals = 0;
    let hatTrick = false;

    while (true) {
        let player = input.shift();
        if (player === 'END') {
            break;
        }

        let goals = Number(input.shift());

        if (goals >= 3) {
            hatTrick = true;
        }

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayerName = player;
        }

        if (maxGoals >= 10) {
            break;
        }
    }

    console.log(`${bestPlayerName} is the best player!`);
    if (hatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])