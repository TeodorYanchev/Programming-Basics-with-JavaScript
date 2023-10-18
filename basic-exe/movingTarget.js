function movingTarget(data) {
    let stringTarget = data.shift().split(" ");
    let target = stringTarget.map(x => Number(x));

    let index = 0;
    let command = data[index];
    index++;

    while (command !== "End") {

        let tokens = command.split(" ");
        let elementIndex = Number(tokens[1]);

        switch (tokens[0]) {
            case "Shoot":
                if (elementIndex >= 0 && elementIndex < target.length) {
                    let power = Number(tokens[2]);
                    target[elementIndex] -= power;
                    if (target[elementIndex] <= 0) {
                        target.splice(elementIndex, 1);
                    }
                }
                break;
            case "Add":
                if (elementIndex >= 0 && elementIndex < target.length) {
                    let value = Number(tokens[2]);
                    target.splice(elementIndex, 0, value)
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let radius = Number(tokens[2]);
                if (elementIndex - radius >= 0 && radius + elementIndex < target.length) {
                    target.splice(elementIndex - radius, radius * 2 + 1)
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        command = data[index];
        index++;
    }
    console.log(target.join("|"));
}