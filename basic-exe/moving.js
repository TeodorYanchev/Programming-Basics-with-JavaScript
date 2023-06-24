function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let housingVolume = width * length * height;

    let command = input[index];
    index++;

    while (command !== "Done") {
        // command = Number(command);
        let boxesCount = Number(command);

        housingVolume -= boxesCount;

        if (housingVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(housingVolume)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
     console.log(`${housingVolume} Cubic meters left.`);
    }
}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
