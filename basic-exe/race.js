function race(input) {

    let listOfParticipants = input.shift().split(', ');

    let objOfParticipants = {};

    for (const name of listOfParticipants) {
        objOfParticipants[name] = 0;
    }

    let currentRow = input.shift();

    let lettersPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentRow !== 'end of race') {

        let currentName = currentRow.match(lettersPattern).join('');
        let distance = currentRow.match(digitPattern);

        let currentDistance = 0;

        distance.map(d => currentDistance += Number(d));

        if (objOfParticipants.hasOwnProperty(currentName)) {
            objOfParticipants[currentName] += currentDistance;
        }
        currentRow = input.shift();
    }

    let sortedOfParticipants = Object.entries(objOfParticipants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedOfParticipants[0][0]}`);
    console.log(`2nd place: ${sortedOfParticipants[1][0]}`);
    console.log(`3rd place: ${sortedOfParticipants[2][0]}`);

}

