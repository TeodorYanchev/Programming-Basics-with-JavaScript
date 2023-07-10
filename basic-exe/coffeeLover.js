function manageCoffee(input) {
    let coffees = input.shift().split(" ");
    let commandsCount = Number(input.shift());
  
    for (let i = 0; i < commandsCount; i++) {
      let commandArgs = input[i].split(" ");
      let command = commandArgs.shift();
  
      switch (command) {
        case "Include":
          let coffeeToAdd = commandArgs[0];
          coffees.push(coffeeToAdd);
          break;
        case "Remove":
          let removeType = commandArgs[0];
          let count = Number(commandArgs[1]);
  
          if (removeType === "first") {
            coffees = coffees.slice(count);
          } else if (removeType === "last") {
            coffees = coffees.slice(0, coffees.length - count);
          }
          break;
        case "Prefer":
          let index1 = Number(commandArgs[0]);
          let index2 = Number(commandArgs[1]);
  
          if (
            index1 >= 0 &&
            index1 < coffees.length &&
            index2 >= 0 &&
            index2 < coffees.length
          ) {
            let coffee1 = coffees[index1];
            let coffee2 = coffees[index2];
            coffees[index1] = coffee2;
            coffees[index2] = coffee1;
          }
          break;
        case "Reverse":
          coffees = coffees.reverse();
          break;
      }
    }
  
    console.log("Coffees: " + coffees.join(" "));
  }
//   manageCoffee(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", 
// "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])

manageCoffee(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica", "3", "Include OrdinaryCoffee", "Remove first 1", "Prefer 4 1"])