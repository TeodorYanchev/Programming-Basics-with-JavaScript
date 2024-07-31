function numberWars(input) {
    // Прочитаме имената на двамата играчи
    let player1 = input.shift();
    let player2 = input.shift();

    // Инициализираме променливи за точките на играчите
    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;

    // Обхождаме входа с for цикъл, като при всяка итерация инкрементираме i с 2,
    // за да прочетем картите на двамата играчи за текущия ход
    for (let i = 0; i < input.length; i += 2) {
        // Прочитаме картите на двамата играчи за текущия ход
        let cardPlayer1 = Number(input[i]);
        let cardPlayer2 = Number(input[i + 1]);

        // Проверяваме стойностите на картите на двамата играчи
        if (cardPlayer1 > cardPlayer2) {
            // Ако картата на първия играч е по-голяма, той печели точки
            pointsPlayer1 += cardPlayer1 - cardPlayer2;
        } else if (cardPlayer2 > cardPlayer1) {
            // Ако картата на втория играч е по-голяма, той печели точки
            pointsPlayer2 += cardPlayer2 - cardPlayer1;
        } else {
            // В случай на равни карти, провеждаме "Number wars"
            // и те трябва да дадат по още една карта
            // (в този случай не се добавят точки към който и да е играч)
            i += 2; // Пропускаме следващите две карти, за да вземем новите карти за Number wars
        }
    }

    // Извеждаме резултатите от играта
    if (pointsPlayer1 > pointsPlayer2) {
        console.log(`${player1} is winner with ${pointsPlayer1} points`);
    } else if (pointsPlayer2 > pointsPlayer1) {
        console.log(`${player2} is winner with ${pointsPlayer2} points`);
    } else {
        console.log("It's a tie!");
    }
}
numberWars(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]) 