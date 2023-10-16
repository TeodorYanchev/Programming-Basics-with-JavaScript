function train(input) {
    let wagons = input[0].split(' ').map(Number);
    let wagonCapacity = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        let command = input[index];

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));

        } else {
            let passangers = Number(command[0]);
            for (currentWagon = 0; currentWagon < wagons.length; currentWagon++) {      //current wagon
                if (wagonCapacity - wagons[currentWagon] >= passangers) {
                    wagons[currentWagon] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}