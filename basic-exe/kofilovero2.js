
function manageCoffee(input) {
    let coffees = input[0].split(" ");
    let commandsCount = Number(input[1]);
  
    for (let i = 2; i < commandsCount + 2; i++) {
      let commandArgs = input[i].split(" ");
      let command = commandArgs[0];
  
      if (command === "Include") {
        let coffeeToAdd = commandArgs[1];
        coffees.push(coffeeToAdd);
      } else if (command === "Remove") {
        let removeType = commandArgs[1];
        let count = Number(commandArgs[2]);
  
        if (removeType === "first") {
          coffees = coffees.slice(count);
        } else if (removeType === "last") {
          coffees = coffees.slice(0, coffees.length - count);
        }
      } else if (command === "Prefer") {
        let index1 = Number(commandArgs[1]);
        let index2 = Number(commandArgs[2]);
  
        if (
          index1 >= 0 &&
          index1 < coffees.length &&
          index2 >= 0 &&
          index2 < coffees.length
        ) {
          let temp = coffees[index1];
          coffees[index1] = coffees[index2];
          coffees[index2] = temp;
        }
      } else if (command === "Reverse") {
        coffees.reverse();
      }
    }
  
    console.log("Coffees: " + coffees.join(" "));
  }
  