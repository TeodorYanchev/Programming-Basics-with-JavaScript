function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let command = input.shift();

    while (command !== 'PARTY') {
        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regularList.push(command)
        } else {
            vipList.push(command);
        }

        command = input.shift();
    }
    let allGuests = vipList.concat(regularList);

    for (const guest of input) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1)
        }
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}